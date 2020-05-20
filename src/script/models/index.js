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
    }
}
export default responApi