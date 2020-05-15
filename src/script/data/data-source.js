// import clubs from './clubs.js'
class DataSource {
    static searchClub(keyword) {
        let endPoint = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php"
        return new Promise((resolve, reject) => {
            fetch(`${endPoint}?t=${keyword}`)
                .then(res => res.json())
                .then(res => {
                    if (res.teams) {
                        resolve(res)
                    } else {
                        reject(`${keyword} is not found`)
                    }
                })
        })
    }
}

export default DataSource;