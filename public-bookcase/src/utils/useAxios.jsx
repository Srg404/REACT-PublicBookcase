import axios from 'axios';
import { useState, useEffect } from 'react';

export function useAxios(baseURL) {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState('waiting');
    // status authorize values : 'waiting', 'done', 'error'

    useEffect(() => {
        axios.get(baseURL)
          .then((response) => {
            setData(response.data);
            setStatus('done');
          })
          .catch((error) => {
            console.log(error);
            setStatus('error');
          })
      }, [baseURL]);

    return {status, data}
}