import  { useState, useEffect } from 'react';


const useFetch = (url) => {          //custom hooks requires the word "use-" otherwise it wont work
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);       

    useEffect(() => {
        setTimeout(() => {
          console.log("use effect ran");
        fetch(url)
        .then(res => {
          if(!res.ok){        //error throwing
            throw Error('could not fetch the data for that resource');
          }
          return  res.json();
        })
        .then(data => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err =>{              //catching error, e.g. network error
          setIsPending(false);
          setError(err.message);
        } )   
        }, 1000);
        
      }, [url]); //dependecy array

      return { data, isPending, error};
}

export default useFetch;