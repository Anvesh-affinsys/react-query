import {useParams} from "react-router-dom";
import {useSuperHeroData} from "../hooks/useSuperHeroData";

export const RQSuperHero=()=>{
    const {heroId}=useParams();
    const {isLoading,data,isError,error}=useSuperHeroData(heroId);

    if(isLoading){
        return <h2>Loading</h2>
    }


    return <h2>{data?.data.name} </h2>
}