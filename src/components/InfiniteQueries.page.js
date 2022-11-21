import React from "react";
import {useInfiniteQuery} from "react-query";
import axios from "axios";

const fetchColors = ({pageParam=1}) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

export function InfiniteQueriesPage(){
    const {isLoading,isError,error,data,hasNextPage,fetchNextPage}=useInfiniteQuery(['colors'],
        fetchColors,
        {
            getNextPageParam:(_lastPage,pages)=>{
                if(pages.length<4)
                    return pages.length+1
                else
                    return undefined
            }
        }
    )

    if (isLoading) {
        return <h2>Loading</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

    console.log(data)


    return (
        <>
            <div style={{maxHeight:"20vh",overflow:"auto",border:"1px solid black",width:"10rem"}}>
                {
                    data?.pages.map((group,i) => {
                        return (
                            <div key={i}>
                                {
                                    group.data.map(color=>(
                                        <h2 key={color.id}>
                                            {color.id} {color.label}
                                        </h2>
                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
        </>
    )}