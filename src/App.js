import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'
import {ReactQueryDevtools} from "react-query/devtools";
import {HomePage} from './components/Home.page'
import {QueryClientProvider, QueryClient} from "react-query"
import {RQSuperHeroesPage} from './components/RQSuperHeroes.page'
import {SuperHeroesPage} from './components/SuperHeroes.page'
import {RQSuperHero} from "./components/RQSuperHero.page";
import {ParallelQueriesPage} from "./components/ParallelQueries.page"
import {DynamicParallelPage} from "./components/DynamicParallel.page"
import {DependentQueriesPage} from "./components/DependentQueries.page";
import {PaginatedQueriesPage} from "./components/PaginatedQueries.page";
import {InfiniteQueriesPage} from "./components/InfiniteQueries.page";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            refetchOnmount: true,
            refetchOnReconnect: true,
            retry: false,
            // staleTime: 200000,
        },
    },

})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/super-heroes'>Traditional Super Heroes</Link>
                            </li>
                            <li>
                                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                            </li>
                            <li>
                                <Link to='/rq-paginated'>RQ Pagination</Link>
                            </li>
                            <li>
                                <Link to='/rq-infinite'>RQ Infinite</Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link to='/rq-parallel'>Parallel Queries</Link>*/}
                            {/*</li>*/}
                            <li>
                                <Link to='/rq-dynamic-parallel'>Dynamic parallel Queries</Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link to='/rq-dependent'>Dependent Queries</Link>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/rq-dependent'>
                            <DependentQueriesPage email='vishwas@example.com'/>
                        </Route>
                        <Route path='/rq-dynamic-parallel'>
                            <DynamicParallelPage heroIds={[1,3]}/>
                        </Route>
                        <Route path='/rq-parallel'>
                            <ParallelQueriesPage/>
                        </Route>
                        <Route path='/rq-super-heroes/:heroId'>
                            <RQSuperHero/>
                        </Route>
                        <Route path='/super-heroes'>
                            <SuperHeroesPage/>
                        </Route>
                        <Route path='/rq-super-heroes'>
                            <RQSuperHeroesPage/>
                        </Route>
                        <Route path='/rq-paginated'>
                            <PaginatedQueriesPage/>
                        </Route>
                        <Route path='/rq-infinite'>
                            <InfiniteQueriesPage/>
                        </Route>
                        <Route path='/'>
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
    )
}

export default App