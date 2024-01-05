import HeaderButton from "@/Components/Button/HeaderButton";
import rectan from "@/assets/home/rectan.png";
import Image from "next/image";

const Menu = () => {
    const menu =[
        {
            "id":"1",
            "img": rectan,
            "name":"ROAST DUCK BREAST ------------------",
            "des": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "price": "14.5"
        },
        {
            "id":"2",
            "img": rectan,
            "name":"ROAST DUCK BREAST ------------------",
            "des": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "price": "14.5"
        },
        {
            "id":"3",
            "img": rectan,
            "name":"ROAST DUCK BREAST ------------------",
            "des": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "price": "14.5"
        },
        {
            "id":"4",
            "img": rectan,
            "name":"ROAST DUCK BREAST ------------------",
            "des": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "price": "14.5"
        },
        {
            "id":"5",
            "img": rectan,
            "name":"ROAST DUCK BREAST ------------------",
            "des": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "price": "14.5"
        },
        {
            "id":"6",
            "img": rectan,
            "name":"ROAST DUCK BREAST ------------------",
            "des": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "price": "14.5"
        },
    ]

    return (
        <div className="mt-10">
            <HeaderButton subheader={'Check It Out'} header={'FROM OUR MENU'}></HeaderButton>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 lg:mx-24">
                {menu.map(men=><div key={men.id} className="flex gap-5 justify-center items-center">
                    <div>
                        <Image src={men.img} width='80' height='auto' alt=""/>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">{men.name}</h1>
                        <p>{men.des}</p>
                    </div>
                    <div>
                        <h3 className="text-yellow-500">${men.price}</h3>
                    </div>

                </div>)}
            </div>
            <div className="flex justify-center items-center mt-10">
            <button className="btn btn-outline btn-primary">See All Menu</button>

            </div>
        </div>
    );
};

export default Menu;