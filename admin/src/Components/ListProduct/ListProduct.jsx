import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      body:JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className=" flex flex-col items-center w-[100%] h-[740px] pt-[10px] pl-[50px] pr-[50px] m-[30px] rounded-[6px] bg-white">
      <h1>All Products List</h1>
      <div className=" grid grid-cols-6 gap-[10px] w-[100%] pt-[20px] text-[#454545] text-[15px] font-semibold">
        <p>Products</p>
        <p>Titiles</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className=" overflow-auto">
        <hr className=" h-[2px] rounded-3xl bg-gray-400" />
        {allProducts.map((product, index) => {
          return (
            <>
              
              <div
                key={index}
                className=" grid grid-cols-6 gap-[10px] w-[100%] pt-[20px] text-[#454545] text-[15px] font-semibold"
              >
                <img src={product.image} alt="" className=" h-[80px]" />
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  src={cross_icon}
                  alt=""
                  className=" cursor-pointer m-auto"
                />
              </div>
              <hr className=" h-[2px] rounded-3xl bg-gray-400"
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
