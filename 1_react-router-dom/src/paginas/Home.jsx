import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home: Site de lugar nenhum</h1>
            <Link to={'/joao'}>Ver página do João</Link>
        </div>
    )
}

export default Home