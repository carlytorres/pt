import axios from 'axios'

const marvelApi = axios.create({
    baseURL:'https://gateway.marvel.com/v1/public',
        params:{
            ts     : 1,
            apikey : '50ba0880229a7cf4142ae88c04e6b9d1',
            hash   : '2959c9ed3df8fc6f2c2af9ac4674b19c'
        }   

})

export default marvelApi