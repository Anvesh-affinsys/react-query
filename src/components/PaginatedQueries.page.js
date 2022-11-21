import {useState} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

const fetchColors = page => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`)
}

export const PaginatedQueriesPage = () => {
    const [page, setPage] = useState(1);
    const {isLoading, isError, error, data} = useQuery(['colors', page],
        () => fetchColors(page),)


    if (isLoading) {
        return <h2>Loading</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    console.log(data);
    return (
        <>
            <div>
                {
                    data?.data.map((color) => {
                        return (
                            <div key={color.id}>
                                <h2>
                                    {color.id}. {color.label}
                                </h2>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={()=>setPage(page=>page-1)}>Prev Page</button>
            <button onClick={()=>setPage(page=>page+1)}>Next Page</button>
        </>
    )

}