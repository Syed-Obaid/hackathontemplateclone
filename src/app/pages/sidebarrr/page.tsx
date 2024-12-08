import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-auto py-8 w-80 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <h2 className="text-[24px] font-semibold">Shopping Cart</h2>
       
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <RxCross2 className="text-[28px]"/>
        </button>
        {/* Add cart items here */}
        {/* <p>Your cart is empty!</p> */}
      </div>
    <div className="py-10 flex justify-evenly items-center">
        <img src="/shoppingcart.png" alt="" />
        <div>
            <h1 className="textk-[16px]">Asgaard sofa</h1>
            <p className="text-[#B88E24] text-[12px]">Rs. 250,000.00</p>
        </div>

    </div>
    <div className="flex justify-evenly items-center py-5 border-b-2">
        <p className="text-[16px] hover:underline">Subtotal</p>
        <p className="text-[#B88E24] text-[16px] hover:underline">Rs. 250,000.00</p>
    </div>
<div className="flex justify-evenly items-center py-5"> 
   <Link href=""> <button className="text-[12px] py-1 px-8 rounded-3xl border-2 border-black">View Cart</button></Link>
   <Link href="../pages/checkout"> <button className="text-[12px] py-1 px-8 rounded-3xl border-2 border-black">Checkout</button></Link>
    
</div>

    </div>
  );
};

export default Sidebar;
