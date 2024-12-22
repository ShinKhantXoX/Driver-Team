

const LandingPage = () => {

    return (
        <div>
            {/* Start Hero section */}
            <section id={"/home"} className=" w-full mt-[100px]">
                <img className=" h-screen md:h-auto object-cover md:object-fill" src="Hero.svg" />
                <div className=" bg-primary w-full h-[50px] md:h-[100px]"></div>
            </section>
            {/* End Hero Section */}

            {/* Start About us section */}
            <section id={"/about"}>
                <div className=" px-[20px] md:px-[200px] text-center mt-[100px]">

                    <h2 className=" text-2xl font-bold">
                        About Us
                    </h2>
                    <h3 className=" mt-2 text-xl font-semibold">
                        Kya Note Toe About Us
                    </h3>
                    <p className=" mt-5 text-black-50 break-words">
                        loremsdasdasdasdkmowelwdmaskdmkamsmdkasdmkasdmaskdmasjdasgdyaweidjqiwndjash
                    </p>
                </div>

                <div className=" mt-20 divider"></div>

                <div className="mt-20 px-[20px] md:px-[200px] grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 flex justify-center">
                        <img src={"mission.svg"} alt="Mission" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex justify-center mt-10 md:mt-0">
                        <img src={"mission-1.svg"} alt="Mission 1" />
                    </div>
                </div>

                <div className=" mt-20 divider"></div>

                <div className="mt-20 px-[20px] md:px-[200px] grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 flex justify-center">
                        <img src={"vision-1.svg"} alt="Mission" />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex justify-center mt-10 md:mt-0">
                        <img src={"vision.svg"} alt="Mission 1" />
                    </div>
                </div>

                <div className=" mt-20 divider"></div>

            </section>
            {/* End About us section */}

            {/* Start Service section */}
            <section id={'/service'}>

                <div className=" text-center mt-[100px]">
                    <h1 className=" text-2xl font-semibold">Win saung mu myar</h1>
                    <h3 className=" text-xl font-semibold mt-4">{"(Service Page)"}</h3>
                </div>

                <div className=" px-[30px] mt-[100px] grid grid-cols-12 gap-4">

                    <div className="col-span-12 md:col-span-3 flex justify-center">
                        <div className=" w-full h-[250px] md:h-[180px] xl:h-[250px] bg-primary rounded-[20px] p-5">
                            <img src={"trust.svg"} />

                            <img src={"trust-text.svg"} className="mt-5" />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3 flex justify-center">
                        <div className=" w-full h-[250px] md:h-[180px] xl:h-[250px] bg-primary rounded-[20px] p-5">
                            <img src={"rate.svg"} />

                            <img src={"rate-text.svg"} className="mt-5" />

                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3 flex justify-center">
                        <div className=" w-full h-[250px] md:h-[180px] xl:h-[250px] bg-primary rounded-[20px] p-5">
                            <img src={"secure.svg"} />

                            <img src={"secure-text.svg"} className="mt-5" />

                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-3 flex justify-center">
                        <div className=" w-full h-[250px] md:h-[180px] xl:h-[250px] bg-primary rounded-[20px] p-5">
                            <img src={"first.svg"} />

                            <img src={"first-text.svg"} className="mt-5" />

                        </div>
                    </div>

                </div>

            </section>
            {/* End Service section */}

            {/* Start Download section */}
            <section id={'/download'} className=" px-[30px] md:px-[120px] py-[80px] bg-primary mt-[100px]">
                <div className=" grid grid-cols-12 gap-4">
                    <div className=" col-span-12 md:col-span-8 flex justify-start">
                        <div className="">
                            <h3 className=" text-white text-xl font-bold">App ko Download load pr</h3>
                            <img src={"play-store.svg"} className=" mt-5 w-[273px] h-[40px]" />
                            <h4 className="text-3xl text-white font-semibold mt-5">Get A Free Driver Team Ride-Hailing App <br />
                                From Online Store</h4>
                            <p className=" md:w-[300px] xl:w-[400px] text-white text-xl mt-3">
                                It is a long established fact that a reader will be distaracted by the
                                readable content of a page when looking at its layout. The point of using
                                Lorem Ipsum. It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout. The point
                                of using Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className=" col-span-12 md:col-span-4 flex justify-center">
                        <img src={"showcase.svg"} className="" />
                    </div>
                </div>
            </section>
            {/* End Download section */}

            {/* Start App Feature section */}
            <section className=" bg-[#F1F1F1] md:px-[80px] xl:px-[120px] py-[50px]">

                <div className=" grid grid-cols-12 gap-4 px-[30px] md:px-0">

                    <div className=" col-span-12 md:col-span-6">
                        <div>
                            <img src={"app-feature.svg"} />
                        </div>
                        <div className=" mt-10">
                            <img src={"toke-toke.svg"} />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <div className=" grid grid-cols-12 gap-4 md:gap-8">

                            <div className=" col-span-12 md:col-span-6">
                                <div className=" mt-14 grid grid-cols-12 gap-3 xl:gap-5">

                                    <div className=" col-span-12">
                                        <div className="w-full md:max-w-[200px] xl:max-w-[300px] min-h-[203px] bg-primary rounded-[20px] py-7">
                                            <img className="mx-auto" src={'toke-face.svg'} />
                                            <img className="mx-auto mt-3" src={"feature-first.svg"} />
                                        </div>
                                    </div>

                                    <div className=" col-span-12">
                                        <div className="w-full md:max-w-[200px] xl:max-w-[300px] min-h-[203px] bg-primary rounded-[20px] py-7">
                                            <img className="mx-auto" src={'toke-face.svg'} />
                                            <img className="mx-auto mt-3" src={"feature-sec.svg"} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-6">

                                <div className=" grid grid-cols-12 gap-4 xl:gap-5">
                                    <div className=" col-span-12">
                                        <div className="w-full md:max-w-[200px] xl:max-w-[300px] min-h-[203px] bg-primary rounded-[20px] py-7">
                                            <img className="mx-auto" src={'toke-face.svg'} />
                                            <img className="mx-auto mt-3" src={"feature-third.svg"} />
                                        </div>
                                    </div>

                                    <div className=" col-span-12">
                                        <div className="w-full md:max-w-[200px] xl:max-w-[300px] min-h-[203px] bg-primary rounded-[20px] py-7">
                                            <img className="mx-auto" src={'toke-face.svg'} />
                                            <img className="mx-auto mt-3" src={"feature-four.svg"} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </section>
            {/* End App Feature section */}

            {/* Start Thet Tay Kan section */}
            <section className=" px-[30px]">

                <div className=" mt-[50px]">
                    <img src={"thet-tay-kan.svg"} />
                </div>

                <div className=" mt-[30px] grid grid-cols-12 gap-4 md:gap-8">

                    <div className=" col-span-12 md:col-span-6">
                        <div className=" bg-primary rounded-[20px] overflow-hidden">
                            <img className=" w-full" src={"thet-image-one.svg"} />
                            <p className=" p-[30px] break-words text-white">loremsdasdasdasdkmowelwdmaskdmkamsmdkasdmkasdmaskdmasjdasgdyaweidjqiwndjash</p>
                        </div>
                    </div>
                    <div className=" col-span-12 md:col-span-6">
                        <div className=" bg-primary rounded-[20px] overflow-hidden">
                            <img className=" w-full" src={"thet-image-two.svg"} />
                            <p className=" p-[30px] break-words text-white">loremsdasdasdasdkmowelwdmaskdmkamsmdkasdmkasdmaskdmasjdasgdyaweidjqiwndjash</p>
                        </div>
                    </div>

                </div>

            </section>
            {/* End Ther Tay Kan section */}

            {/* Start Contact section */}
            <section id={'/contact'} className=" px-[30px] mt-[50px]">
                <div className=" text-center">
                    <h3 className=" font-semibold text-xl">Set twal yan</h3>
                    <h4 className=" font-bold text-2xl">{"(About Us Page)"}</h4>
                </div>
                <img className=" mt-[30px]" src={"about-us.svg"} />

                <div className=" grid grid-cols-12 gap-4 mt-[30px]">

                    <div className=" col-span-12 md:col-span-6">

                        <div className=" bg-[#F1F1F1] rounded-[20px] p-[20px]">

                            <div className=" mt-5 flex items-center justify-start gap-4">
                                <img src={"phone-call.svg"} />
                                <p className=" font-semibold">(+95) 9882577171</p>
                            </div>

                            <div className=" mt-5 flex items-center justify-start gap-4">
                                <img src={"mail.svg"} />
                                <p className=" font-semibold">driverteam7@gmail.com</p>
                            </div>

                            <div className=" mt-5 flex items-center justify-start gap-4">
                                <img src={"gps.svg"} />
                                <p className=" font-semibold">791</p>
                            </div>

                            <div className=" mt-5 flex items-center justify-start gap-4">
                                <img src={"facebook.svg"} />
                                <p className=" font-semibold">Driverteam7</p>
                            </div>

                            <div className=" mt-5 flex items-center justify-start gap-4">
                                <img src={"instagram.svg"} />
                                <p className=" font-semibold">Driverteam7</p>
                            </div>

                            <div className=" mt-5 flex items-center justify-start gap-4">
                                <img src={"twitter.svg"} />
                                <p className=" font-semibold">Driverteam7</p>
                            </div>

                        </div>

                        <div className="mt-10">
                            <img src={"about-us-img.svg"} />
                        </div>

                    </div>

                    <div className=" col-span-12 md:col-span-6 mt-10 md:mt-0">

                        <div className="bg-[#F1F1F1] rounded-[20px] p-[20px] py-[30px]">

                            <h3 className="text-center text-xl font-bold">Get Started with a free quotation</h3>

                            <form>

                                <label className="mt-5 text-lg font-semibold block">Title</label>
                                <div className=" mt-3 w-full h-[55px] px-[20px] flex justify-start items-center bg-white rounded-[20px]">
                                    <div>
                                        <img src={"text.svg"} />
                                    </div>
                                    <input className=" ml-7 w-full outline-none" placeholder="Enter your Title" />
                                </div>

                                <label className="mt-5 text-lg font-semibold block">Email</label>
                                <div className=" mt-3 w-full h-[55px] px-[20px] flex justify-start items-center bg-white rounded-[20px]">
                                    <div>
                                        <img src={"directbox-notif.svg"} />
                                    </div>
                                    <input className=" ml-5 w-full outline-none" placeholder="Enter your Email" />
                                </div>

                                <label className="mt-5 text-lg font-semibold block">Message</label>
                                <div className=" mt-3 w-full h-[155px] px-[20px] flex justify-start items-center bg-white rounded-[20px]">
                                    <div className="">
                                        <img className=" mb-[100px]" src={"messages.svg"} />
                                    </div>
                                    <textarea rows={5} col={10} className=" ml-7 w-full outline-none" placeholder="Enter your Email" />
                                </div>

                                <div className="w-full flex items-center justify-center mt-[30px]">
                                    <button className=" w-[300px] h-[55px] bg-primary text-white font-bold rounded-[20px] flex items-center justify-center">
                                        Send
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </section>
            {/* End Contact section */}


        </div>
    )

}

export default LandingPage;