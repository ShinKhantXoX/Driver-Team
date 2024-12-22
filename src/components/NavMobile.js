import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
    { label: "Home", path: "/home" },
    { label: "About Us", path: "/about" },
    { label: "Service", path: "/service" },
    { label: "Pricing", path: "/pricing", isAction: false },
    { label: "Download App", path: "/download" },
    { label: "Contact", path: "/contact" },
];


const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
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

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <nav className="fixed top-0 left-0 z-50 w-full px-[20px] py-[10px] bg-primary flex items-center justify-between">
            <img onClick={() => navigate("/")} src={"logo.svg"} />

            {/* Hamburger Button */}
            <button
                className="p-3 text-black bg-white rounded-md focus:outline-none"
                onClick={toggleSidebar}
            >
                ☰
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-primary text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <button
                    className="absolute top-3 right-3 text-white"
                    onClick={toggleSidebar}
                >
                    ✕
                </button>
                <nav className="p-4">
                    <ul className="header-desktop space-y-4">
                        <li>
                            <img onClick={() => navigate("/")} src={"logo-text.svg"} />
                        </li>
                        {/* Navigation Items */}
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    handleActiveScroll(item.path);
                                    setActiveLabel(item.label)
                                }}
                                className={`text-white font-semibold cursor-pointer`}
                            >
                                <a href={item.path} onClick={(e) => {
                                    e.preventDefault();
                                }} className={`${activeScroll == item.path ? "underline underline-offset-8" : ""}`}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default NavMobile;