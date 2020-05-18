import axios from 'axios'

const responApi = {
    harian: async (headers) => {
        try {
            let respon = await axios
                .get(`https://indonesia-covid-19.mathdro.id/api/harian`, headers)
            // console.log(respon)
            return respon.data
        } catch (error) {
            console.log(error)
        }
    },
    totalKasus: async headers => {
        try {
            let respon = await axios
                .get(`https://indonesia-covid-19.mathdro.id/api`, headers)
            // console.log(respon)
            return respon.data
        } catch (error) {
            console.log(error)
        }
    },
    apiBaruPerProvinsi: async () => {
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        try {
            let respon = await axios.get(`https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`, config)
            console.log(respon)
        } catch (error) {
            console.log(error)
        }
    },
    apiBaruAll: async () => {
        try {
            // let respon = await axios.get(`https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_COVID19_Indonesia/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`)
            // return respon.data.features
            let respon = await axios.get(`https://covid19.mathdro.id/api/countries/indonesia`)

            return respon.data
        } catch (error) {
            console.log(error)
        }
    }
}
export default responApi