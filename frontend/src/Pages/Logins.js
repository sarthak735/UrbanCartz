import React from "react";

const Logins = () => {
  return (
    <div className=" w-[100%] h-[80vh] bg-[#fce3fe] pt-[100px]">
      <div className=" w-[580px] h-[600px] bg-white m-auto pt-[40px] pl-[60px] pr-[60px]">
        <h1 className=" mt-[20px] ml-[0px] text-3xl font-medium">Sign Up</h1>
        <div className=" flex flex-col gap-[29px] mt-[30px]">
          <input
            className=" h-[72px] w-[100%] pl-[20px] border border-solid border-[#c9c9c9] outline-none text-[18px]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className=" h-[72px] w-[100%] pl-[20px] border border-solid border-[#c9c9c9] outline-none text-[18px]"
            type="email"
            placeholder="Email Address"
          />
          <input
            className=" h-[72px] w-[100%] pl-[20px] border border-solid border-[#c9c9c9] outline-none text-[18px]"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className=" w-[461px] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer">
          Continue
        </button>
        <p className=" mt-[20px] text-[#5c5c5c] text-[18px] font-medium">
          Already have an account?{" "}
          <span className=" text-[#ff4141] font-semibold cursor-pointer">
            Login here
          </span>
        </p>
        <div className=" flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Logins;
