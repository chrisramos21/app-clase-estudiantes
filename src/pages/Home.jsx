import { Outlet } from "react-router-dom"
import MenuLateral from "../components/MenuLateral"
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <MenuLateral/>
            <Outlet/>
        </div>
    )
}

export default Home