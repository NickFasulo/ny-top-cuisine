import axios from 'axios'

let apiUrl

const apiUrls = {
  production: 'https://nytc.herokuapp.com',
  development: 'https://nytc.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})

export default api
