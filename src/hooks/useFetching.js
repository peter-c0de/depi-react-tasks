import { useState } from "react";
import { useParams } from "react-router";

function useFetching(URL){

    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const handleFetchData = async()=> {
        if (isNaN(id)){ 
            setIsLoading(false);
            setIsError(true);
            return
        };
        try{
            const response = await fetch(`${URL}${id}`);
            console.log("response:", response);
            if(!response.ok) throw new Error("Invalid product Id");
            const data = await response.json();
            // console.log("data:", data);
            setData(data);
        }catch(error){
            setIsError(true);
            // console.error(error);
        }finally{
            setIsLoading(false);
            console.log("Finally!");
        }
    };

    return {
        isLoading,
        isError,
        data,
        handleFetchData,
    }
}

export default useFetching;