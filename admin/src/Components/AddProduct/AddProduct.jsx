import React, { useState } from "react";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const[productDetails, setProductDetails] = useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  })

  const imageHandler = (e) =>{
      setImage(e.target.files[0]);
  }

  const changeHandler =(e) =>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async () =>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);
    
    await fetch('http://localhost:4000/upload', {
      method:'POST',
      headrers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data) => {responseData = data});

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);

      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) =>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  }

  return (
    <div className=" box-border w-[100%] max-w-[800px] pt-[30px] pl-[50px] pr-[50px] mt-[20px] ml-[30px] rounded-[6px] bg-white">
      <div className=" w-[100%] text-[#7b7b7b] text-[16px] mb-[10px]">
        <p className=" mb-[10px]">Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
          className=" box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] pr-[15px] border border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] font-[poppins] text-[14px]"
        />
      </div>
      <div className=" flex gap-[40px] mb-[10px]">
        <div className=" w-[100%] text-[#7b7b7b] text-[16px]">
          <p  className="mb-[10px]">Price</p>
          <input
          value={productDetails.old_price}
          onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
            className=" box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] pr-[15px] border border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] font-[poppins] text-[14px]"
          />
        </div>
        <div className=" w-[100%] text-[#7b7b7b] text-[16px] mb-[10px]">
          <p className=" mb-[10px]">Offer price</p>
          <input
          value={productDetails.new_price}
          onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
            className=" box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] pr-[15px] border border-solid border-[#c3c3c3] outline-none text-[#7b7b7b] font-[poppins] text-[14px]"
          />
        </div>
      </div>
      <div className=" w-[100%] text-[#7b7b7b] text-[16px] mb-[10px]">
        <p className=" mb-[10px]">Product Category</p>
        <select
        value={productDetails.category}
        onChange={changeHandler}
          name="category"
          className=" p-[10px] w-[100px] h-[50px] text-[14px] text-[#7b7b7b] border border-solid border-[#7b7b7b8d] rounded-[4px]"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img
            src={image?URL.createObjectURL(image):upload_area}
            alt=""
            className=" h-[120px] w-[120px] rounded-[10px] object-contain mt-[10px] mb-[10px] ml-[0px]"
          />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
      </div>
      <button onClick={()=> {Add_Product()}} className=" mt-[20px] w-[160px] h-[50px] rounded-[6px] bg-[#6079ff] border-none cursor-pointer text-white text-[16px] font-medium">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
