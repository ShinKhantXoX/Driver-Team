import { AccordionItem } from "../components/AccordionItem";



const Faq = () => {

    const items = [
        { title: "Item 1", content: "Content for Item 1" },
        { title: "Item 2", content: "Content for Item 2" },
        { title: "Item 3", content: "Content for Item 3" },
    ];

    return (
        <>
            <div className=" px-[30px]">
                <h1 className=" text-2xl font-bold mt-10">FAQS</h1>
                <h3 className=" text-lg mt-2 text-black-50">Mingalar Par, How can we help you?</h3>


            </div>

            <div className=" mt-8 divider"></div>

            <div className=" px-[30px]">
                <h1 className="text-2xl font-bold mt-10"> A htay htay may kon myar</h1>

                <div className="w-full my-6 bg-white shadow-lg">
                    {items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Faq;