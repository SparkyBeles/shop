export default function Navbar(){
    return(
        <div>
            <nav>
            <NavLink to= "/"> Home</NavLink>
            <NavLink to= "about"> About</NavLink>
            <NavLink to= "cart"> Cart</NavLink>
            </nav>
        </div>
    );
}