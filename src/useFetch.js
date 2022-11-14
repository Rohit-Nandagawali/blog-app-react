import { useState } from "react"
import { useEffect } from "react"

const useFetch = (url) => {
    const [data,setBlog] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)
    // called everytime when the state changes
    // we can also set to run useEffect hook when specific state is changes [name]
    // if it is set to [] empty dependecies then useEffect will be called on the first render
    useEffect(()=>{
        fetch(url) //fetch info from this and then
        .then(responce =>{              //then get a responce
            if(!responce.ok){           //if status is not ok
                throw Error("Could not fetch data for that resource")
            }
            return responce.json()      //convert that json file into javascript object
        })
        .then(
            data =>{
                setError(null)
                setIsPending(false)
                setBlog(data)
            }
        )
        .catch(err => {
            setIsPending(false)
            setError(err.message);   //if there is any error occur while connecting to server
        })
    },[]) //this will be called only once and first time

    return {data,isPending,error}
}
 
export default useFetch;