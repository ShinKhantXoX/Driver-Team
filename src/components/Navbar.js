

const Navbar = () => {
    return (
        <nav className=" px-[30px] bg-primary w-100 h-[100px]">
            <div className=" w-full grid grid-cols-9 items-center justify-center">
                <div>
                    <img src={"logo.svg"} alt="Logo" />
                </div>
                <div>
                    <img src={"logo-text.svg"} alt="logo-text" />
                </div>
                <div className=" text-center text-white font-semibold cursor-pointer">
                    Home
                </div>
                <div className=" text-center text-white font-semibold cursor-pointer">
                    About
                </div>
                <div className=" text-center text-white font-semibold cursor-pointer">
                    Service
                </div>
                <div className=" text-center text-white font-semibold cursor-pointer">
                    Pricing
                </div>
                <div className=" text-center text-white font-semibold cursor-pointer">
                    Download App
                </div>
                <div className=" text-center text-white font-semibold cursor-pointer">
                    Contact
                </div>
                <div>
                    <img src="nav-last.svg" alt="nav last" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;