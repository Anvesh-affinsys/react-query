import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [error,setError]=useState(false);

    useEffect(() => {
        // axios.defaults.baseURL = 'https://api.example.com';
        // axios.defaults.headers.common['Authorization'] = "1234";
        // axios.defaults.headers.post['Content-Type'] = 'application/json';

        axios.get('/friends').then(res => {
            setData(res.data);
            setIsLoading(false);
        }).catch((error)=>{
            setError(error.message);
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    else if(error){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>Super Heroes Page</h2>
            {data.map(hero => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}