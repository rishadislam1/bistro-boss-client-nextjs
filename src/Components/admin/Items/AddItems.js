"use client"
import HeaderButton from "@/Components/Button/HeaderButton";
import { useAddMenuMutation } from "@/redux/features/shop/shopApi";
import { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import Swal from "sweetalert2";


const AddItems = () => {

    const [addMenu,{}] = useAddMenuMutation();
    const handleForm = async (e)=>{
        
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const recipe = form.recipe.value;
        const image = form.image.files[0];

        const image_hosting = 'https://api.imgbb.com/1/upload?expiration=600&key=496cd83f6d0a12aa50bec50d47669908'

           
            if (image) {
                // Upload the image to imgbb
                const formData = new FormData();
                formData.append('image', image);
                
                try {
                    const response = await fetch('https://api.imgbb.com/1/upload?expiration=600&key=496cd83f6d0a12aa50bec50d47669908', {
                        method: 'POST',
                        body: formData,
                    });
        
                    const imageData = await response.json();
        
                    // Use imageData.url in your data object
                    const data = {
                        name,
                        category,
                        price,
                        recipe,
                        image: imageData?.data?.url
                    };
                    addMenu(data);
                    Swal.fire({
                        title: "Add Item Successfully",
                        text: "Your Items Added Successfully",
                        icon: "success"
                      });
                    
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }
        
   
    }


    return (
        <div>
             <div className="flex justify-center items-center">
          <HeaderButton subheader={"WHAT'S NEW?"} header={"ADD NEW ITEM"} />
        </div>
        <div className="p-5 bg-gray-300 rounded">
        <form onSubmit={handleForm}> 
          <div className="flex gap-7 w-full">
            <div className="flex flex-col w-full">
              <label>Recipe Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                placeholder="Enter Your Name"
                required
              />
            </div>

         
          </div>
          <div className="flex gap-7 w-full mt-4">

          <div className="flex flex-col w-full">
              <label>Category*</label>
              
              <select className="select select-ghost w-full max-w-xs" name="category" defaultValue={'Category'}>
  <option disabled>Category</option>
  <option value={'salad'}>Salad</option>
  <option value={'pizza'}>Pizza</option>
  <option value={'soup'}>Soup</option>
  <option value={'desert'}>Deserts</option>
  <option value={'drink'}>Drink</option>
</select>
            </div>
            
            <div className="flex flex-col w-full">
              <label>Price*</label>
              <input
                type="number"
                name="price"
                id="phone"
                className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                placeholder="Enter Your Number"
                required
              />
            </div>
          </div>
          <div className="flex gap-7 w-full mt-4">
            <div className="flex flex-col w-full">
              <label>Recipe Details*</label>
              <textarea
                name="recipe"
                id="message"
                cols="30"
                rows="10"
                className="px-2 bg-white border border-gray-200 rounded py-2 mt-2"
                placeholder="Message Us"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex gap-7 w-full mt-4">
            <div className="flex flex-col w-full">
              <label>Upload Image*</label>
             <input type="file"  className="file-input file-input-bordered w-full max-w-xs" name="image" id="image" accept=".jpg, .jpeg, .png" />
            </div>
          </div>
       
       
          <button
            className="btn btn-outline btn-primary w-full mt-10 flex justify-center items-center"
            type="submit"
     
          >
            Add Items <FaTelegram className="ml-2" />
          </button>
        </form>
        </div>

        </div>
    );
};

export default AddItems;