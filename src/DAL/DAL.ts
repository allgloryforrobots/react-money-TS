const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://www.cbr-xml-daily.ru/',
})


export const DAL = {

    async getDailyJson() {
            return await instance.get('daily_json.js')
    },
    async getLatestJson() {
            return await instance.get('latest.js')
    }
}
