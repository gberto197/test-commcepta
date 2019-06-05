import axios from 'axios'

let url = 'http://localhost:3000/data'

export const team = () => {
  return axios.get(url)
}
