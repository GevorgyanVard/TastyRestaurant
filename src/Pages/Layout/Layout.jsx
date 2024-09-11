import { Outlet } from "react-router-dom"
import Menu from "../../Components/Menu/Menu"
import Footer from "../../Components/Footer/Footer"

const Layout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout