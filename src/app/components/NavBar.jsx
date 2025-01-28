'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    // console.log(pathName, pathName.includes('dashboard'));
    if (!pathName.includes('dashboard')) {
        return (
            <nav>
                <ul className="flex justify-around items-center">
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/services'><li>Services</li></Link>
                    <Link href='/about'><li>About</li></Link>
                </ul>
            </nav>

        );
    } else {
        return <></>
    }

};

export default NavBar;