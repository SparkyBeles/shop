import { Outlet } from "react-router";
import Top from "../components/Top";
import Menu from "../components/Menu";


function Layout () {
    return (
        <>
        <header>
            <Top />
            <Menu />
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default Layout;