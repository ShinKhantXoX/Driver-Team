import { useNavigate } from "react-router-dom";
import { useIsSmall } from "../lib/mediaHook";
import NavMobile from "./NavMobile";
import { useEffect, useState } from "react";

const navItems = [
    { label: "Home", path: "/home" },
    { label: "About Us", path: "/about" },
    { label: "Service", path: "/service" },
    { label: "Pricing", path: "/pricing", isAction: false },
    { label: "Download App", path: "/download" },
    { label: "Contact", path: "/contact" },
];


const Navbar = () => {

    const navigate = useNavigate();
    const isSmall = useIsSmall();
    const [activeLabel, setActiveLabel] = useState();
    const [activeScroll, setActiveScroll] = useState('');

    const handleActiveScroll = (path) => {
        let section = window.document.getElementById(path);

        if (section !== null) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleScroll = () => {
        let sections = window.document.querySelectorAll("section");
        let navLinks = window.document.querySelectorAll("ul.header-desktop li a");

        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach((nav) => {
                    let targetNavLink = document.querySelector('ul.header-desktop li a[href*="' + id + '"]');
                    if (targetNavLink !== null) {
                        const href = targetNavLink.getAttribute('href');
                        setActiveScroll(href);
                    }

                })
            }

        })
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            {isSmall === false ? (
                <nav className=" fixed top-0 left-0 z-50 px-[30px] bg-primary w-100 h-[100px]">
                    <ul className=" header-desktop w-full grid grid-cols-9 items-center justify-center">
                        <li onClick={() => {
                                    handleActiveScroll("/home");
                                    setActiveLabel("Home")
                                }}>
                            <a href="/home" onClick={(e) => {
                                e.preventDefault();
                            }} ><img onClick={() => navigate("/")} src={"logo.svg"} alt="Logo" /></a>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                            }}><img onClick={() => navigate("/")} src={"logo-text.svg"} alt="logo-text" /></a>
                        </li>
                        {/* Navigation Items */}
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    handleActiveScroll(item.path);
                                    setActiveLabel(item.label)
                                }}
                                className={`text-center text-white font-semibold cursor-pointer`}
                            >
                                <a href={item.path} onClick={(e) => {
                                    e.preventDefault();
                                }} className={`${activeScroll == item.path ? "underline underline-offset-8" : ""}`}>{item.label}</a>
                            </li>
                        ))}
                        <li>
                            <img src="nav-last.svg" alt="nav last" />
                        </li>
                    </ul>
                </nav>
            ) : (
                <NavMobile />
            )}



        </>
    )
}

export default Navbar;