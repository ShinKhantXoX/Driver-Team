import { AccordionItem } from "../components/AccordionItem";


const Privacy = () => {

    const items = [
        { title: "Item 1", content: "Content for Item 1" },
        { title: "Item 2", content: "Content for Item 2" },
        { title: "Item 3", content: "Content for Item 3" },
    ];

    return (
        <div className=" px-[30px] mt-10">
            <h1 className=" text-2xl font-bold ">Privacy Policy</h1>

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
    )
}

export default Privacy