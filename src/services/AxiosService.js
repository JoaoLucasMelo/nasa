import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const apodApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=Da4AVPiOL4UV9dNeVXXUNrDFsUxpg7isFvPeyXhI',
  timeout: 8000
})
export const apodDatedApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/',
  timeout: 8000
})
