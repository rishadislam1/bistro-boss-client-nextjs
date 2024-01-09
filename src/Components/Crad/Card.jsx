import Image from 'next/image';
import React from 'react';

const Card = ({item}) => {
    const {image,name,recipe} = item;
    const handleCart = (item)=>{
        console.log(item);
    }
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl ">
        <figure>
          <Image
            src={image}
            width={"400"}
            height={"400"}
            alt={name}
          />
        </figure>
        <div className="card-body flex flex-col justify-center items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleCart(item)} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default Card;