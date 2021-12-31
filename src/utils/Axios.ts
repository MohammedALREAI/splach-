import axios from 'axios';
import { ACCESS_KEY, URL_SITE } from '../Const/env';











const axiosIntance = axios.create({
  baseURL: URL_SITE,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
    `Client-ID ${ACCESS_KEY}`,

  },
});

axiosIntance.interceptors.request.use((req) => {
  if (ACCESS_KEY) {
    req.headers.Authorization = `Client-ID ${ACCESS_KEY}`
    ;
  }
  return req;
});

// axiosIntance.interceptors.response.use((res) => {
//      return res
// }, (error) => {
//      console.log(error.response)
//      const status = error.response ? error.response.status : 500
//      if (status && status === 500) {
//           localStorage.clear()
//           store.dispatch({ type: authConstants.LOGOUT_SUCCESS })
//      }
//      return Promise.reject(error)
// })

export default axiosIntance;
