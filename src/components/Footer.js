import { useNavigate } from "react-router-dom";


const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className=" px-[30px] bg-primary text-white mt-[50px]">
            <div className=" grid grid-cols-12 gap-4">

                <div className=" col-span-12 md:col-span-2 py-[20px]">
                    <h3 className=" font-bold text-lg">App ko download load pr</h3>
                    <img className=" mt-3" src={"app-store.svg"} alt="download app" />
                </div>

                <div className="col-span-12 md:col-span-8 py-[20px]">

                    {/* <div className=" grid grid-cols-12 gap-4">
                        
                        <div className=" col-span-12 md:col-span-2">
                            FAQS
                        </div>

                        <div className=" col-span-12 md:col-span-2">
                            FAQS
                        </div>

                        <div className=" col-span-12 md:col-span-2">
                            FAQS
                        </div>

                        <div className=" col-span-12 md:col-span-2">
                            FAQS
                        </div>

                        <div className=" col-span-12 md:col-span-2">
                            FAQS
                        </div>

                    </div> */}

                    <div className=" flex flex-col justify-center items-center">

                        <div className=" w-full md:w-[500px] flex flex-col md:flex-row items-center justify-center gap-10">
                            <span onClick={() => navigate("/faq")} className=" block cursor-pointer font-semibold text-lg">FAQS</span>

                            <a href="#" className=" block cursor-pointer font-semibold text-lg">About Us</a>

                            <a href="#" className=" block cursor-pointer font-semibold text-lg">Service</a>

                            <span onClick={() => navigate("/privacy")} className=" block cursor-pointer font-semibold text-lg">Privacy <br/> Policy</span>

                            <a href="#" className=" block cursor-pointer font-semibold text-lg">Contact</a>
                        </div>

                    </div>

                    <div>
                        Copy right
                    </div>

                </div>

                <div className="col-span-12 md:col-span-2">
                    <img src={"footer-logo.svg"} />
                </div>


            </div>
        </div>
    )
}

export default Footer;