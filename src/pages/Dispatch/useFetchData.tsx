import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios'

export default function useFetch() {
  const [iso, setIso] = useState({})
  useEffect(() => {
    const options: AxiosRequestConfig = {
      method: 'POST',
      url: process.env.REACT_APP_BASE_URL + '/iso',
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setIso(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  return {
    iso
  }

}
