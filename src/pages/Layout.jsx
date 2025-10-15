import { Outlet } from "react-router";
import Top from "../components/Top";
import Menu from "../components/Menu";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Cart from "./Cart";


function Layout () {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
        <header>
            <Top  onCartClick={() => setIsCartOpen(true)} />
            {/* <Menu /> */}
        </header>
        <main>
            <Outlet />
            <Sidebar 
            open={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            title="cart"><Cart/></Sidebar>
        </main>
        </>
    )
}

export default Layout;