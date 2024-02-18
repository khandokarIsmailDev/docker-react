import React, { useEffect, useState } from 'react';

const useNewsQuery = (category) => {

    const [allCategoryNews,setAllCategoryNews] = useState([])

    //for loading
    const [loading,setLoading] = useState({
        state:false,
        message:""
    })

    //for error handling
    const [error,setError] = useState(null)

    async function fetchedData (){
        try{

            setLoading({
                ...loading,
                state:true,
                message:"Fetching News Data. Please Wait ..."
            })

           
            
            //fetched data catagoriged
            const res = await fetch(`http://localhost:8000/v2/top-headlines?category=${category}`);
            if(!res.ok){
                throw new Error(`Fetching Weather Data ${res.status}`)
            }
            const data = await res.json()
            setAllCategoryNews(data?.articles)
    
        }catch(error){
            setError(error)
        }finally{
            setLoading({
                ...loading,
                state:false,
                message:""
            })
        }
    }

    useEffect(()=>{
        setLoading({
            ...loading,
            state:true,
            message:"Fetching Data..."
        })

        fetchedData()

    },[category])

    return {
        allCategoryNews,
        loading,
        error
    }
};

export default useNewsQuery;