import { Outlet } from "react-router";
import Top from "../components/Top";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Cart from "./Cart";


function Layout () {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [items, setItems] = useState([]);

    return (
        <>
        <header>
            <Top setItems={setItems} onCartClick={() => setIsCartOpen(true)} />
        </header>
        <main>
            <Outlet context={{ items, setItems }}/>
            <Sidebar 
            open={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            title="cart"><Cart/></Sidebar>
        </main>
        </>
    )
}

export default Layout;