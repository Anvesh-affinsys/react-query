import axios from "axios";
import {useQueries} from "react-query";

const fetchSuperHeroes=(heroId)=>{
    return axios.get("http://localhost:4000/superheroes/"+heroId)
}

export const DynamicParallelPage=({heroIds})=>{

    const results=useQueries(heroIds.map(id=>{
        return{
            queryKey:['super-hero',id],
            queryFn:()=>fetchSuperHeroes(id)
        }
    }))

    console.log(results)

    return <div>Dynamic parallel page </div>
}
