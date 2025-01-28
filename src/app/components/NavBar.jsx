import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <ul className="flex justify-around items-center">
                <Link href='/'><li>Home</li></Link>
                <Link href='/services'><li>Services</li></Link>
                <Link href='/about'><li>About</li></Link>
            </ul>
        </nav>

    );
};

export default NavBar;