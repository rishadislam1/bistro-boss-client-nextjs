import HeaderButton from "@/Components/Button/HeaderButton";
import img from "@/assets/home/slide1.jpg";
import Image from "next/image";
const Chef = () => {
  const card = [
    {
      img: img,
      title: "Caeser Salad",
      des: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      id: "1",
    },
    {
      img: img,
      title: "Caeser Salad",
      des: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      id: "2",
    },
    {
      img: img,
      title: "Caeser Salad",
      des: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      id: "3",
    },
  ];
  return (
    <div className="mt-10 lg:mx-24 ">
      <HeaderButton
        subheader={"Should Try"}
        header={"CHEF RECOMMENDS"}
      ></HeaderButton>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-5">
        {card.map((car) => (
          <div key={car.id}>
            <div className="card w-96 bg-base-100 shadow-xl ">
              <figure>
                <Image src={car.img} width={'auto'} height={'300'} alt={car.title}/>
              </figure>
              <div className="card-body flex flex-col justify-center items-center text-center">
                <h2 className="card-title">{car.title}</h2>
                <p>{car.des}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
