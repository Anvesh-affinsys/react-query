import {useQuery, useQueryClient} from "react-query";
import axios from "axios";

const fetchSuperHero = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get("http://localhost:4000/superheroes/" + heroId)
}

export const useSuperHeroData = (heroId) => {
    const queryClient = useQueryClient();
    return useQuery(['super-hero', heroId], fetchSuperHero, {
        initialData: () => {
            console.log(queryClient.getQueriesData('super-heroes')[0])
            const hero = queryClient.getQueriesData('super-heroes')[0][1]?.data?.find(hero=>hero.id===parseInt(heroId))
            // alert(hero);
            if(hero){
                return {
                    data:hero
                }
            }else{
                return undefined;
            }
        }
    })
}