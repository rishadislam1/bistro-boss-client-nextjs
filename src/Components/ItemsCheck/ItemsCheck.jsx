import Image from "next/image";
import rectan from "@/assets/home/rectan.png";

const ItemsCheck = ({img, name,price,des}) => {
 
    return (
        <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-center items-center">
                    <div>
                        <Image src={img} width='100' height='50' alt=""/>
                    </div>
                    <div className="w-52">
                        <h1 className="md:text-xl text-sm font-semibold">{name}</h1>
                        <p>{des}</p>
                    </div>
                    <div>
                        <h3 className="text-yellow-500 text-sm">${price}</h3>
                    </div>

                </div>
    );
};

export default ItemsCheck;