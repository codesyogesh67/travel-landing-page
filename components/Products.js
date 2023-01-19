import Image from "next/image"


const Products = () => {
    const lists = [{
        image: "/products/breakfast.png",
        title: "Food",
        text: "$20"

    },
    {
        image: "/products/burger.png",
        title: "Food",
        text: "$20"

    },
    {
        image: "/products/cookies.png",
        title: "Food",
        text: "$20"

    },
    {
        image: "/products/breakfast.png",
        title: "Food",
        text: "$20"

    },
    {
        image: "/products/burger.png",
        title: "Food",
        text: "$20"

    },
    {
        image: "/products/cookies.png",
        title: "Food",
        text: "$20"

    }
    ]
    return (
        <div className="mt-28 px-10 w-full flex justify-center">
            <div className="container px-6 flex flex-col justify-center">

                <p className="text-4xl font-bold">Featured Products</p>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] py-4 pt-20 gap-12 w-full">
                    {lists.map(({ image, title, text }) => (
                        <div className="border-1 border-black-500/5 shadow-md flex flex-col rounded-[10px]" key={title}>
                            <Image src={image} width="500" height="100" alt="Default image" />
                            <p className="pt-2 text-center font-bold">{title}</p>
                            <p className="text-center pb-4">{text}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Products