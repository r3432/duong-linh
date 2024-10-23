import axios from "axios";
import { useEffect, useState } from "react";

const useCallApiNoPagination = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Call Api
  useEffect(() => {
    const getApi = async () => {
      try {
        // Du lieu dang duoc goi
        setIsLoading(true);
        const res = await axios.get(url);
        // Du lieu goi xong roi
        setData(res.data);
        setIsLoading(false);

      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [url]);


  // Logic Update Data when remove item -> Cap nhat lai gia tri data
  const removeItem = (id) => { //5
    const newData = data.filter((oldDta)=> {
      return oldDta.id !== id;
    })

    return setData(newData);
  }

  return { data, isLoading, removeItem};
}

export default useCallApiNoPagination;