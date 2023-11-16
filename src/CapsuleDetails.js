import React from "react";
import Close from "./images/close.png";

const CapsuleDetails = ({ onClose, capsule }) => {

  return (
    
    <div className="fixed inset-1 bg-black bg-opacity-75 flex items-center justify-center  w-full backdrop-blur z-10">
      <div className="bg-[#000014]  text-white border p-4 rounded h-auto w-a">
        <div class="flex justify-end">
          <button onClick={onClose} className="bg-transparent text-white ">
            <img src={Close} class="h-8 w-8"></img>
          </button>
        </div>
        <p class="tracking-[6px] text-gray-500 p-2" id="section2">
          ID:{" "}
          <span class="tracking-[2px] text-white  capitalize">
            {capsule.id}
          </span>
        </p>
        <p class="tracking-[6px] text-gray-500 p-2">
          Capsule Serial:{" "}
          <span class="tracking-[2px] text-white  capitalize">
            {" "}
            {capsule.serial}
          </span>
        </p>
        <p class="tracking-[6px] text-gray-500 p-2">
          Capsule Status:{" "}
          <span class="tracking-[2px] text-white  capitalize">
            {capsule.status}
          </span>
        </p>
        <p class="tracking-[6px] text-gray-500 p-2">
          Capsule Type:{" "}
          <span class="tracking-[2px] text-white  capitalize">
            {capsule.type}
          </span>
        </p>

        <p class="tracking-[6px] text-gray-500 p-2">
          Last Update:{" "}
          <span class="tracking-[2px] text-white  capitalize">
            {capsule.last_update}
          </span>
        </p>
        <p class="tracking-[6px] text-gray-500 p-2">
          Reuse Counts{" "}
          <span class="tracking-[2px] text-white  capitalize">
            {" "}
            {capsule.reuse_count}
          </span>
        </p>
        <p class="tracking-[6px] text-gray-500 p-2">
          Water Landings{" "}
          <span class="tracking-[2px] text-white  capitalize">
            {capsule.water_landings}
          </span>
        </p>

        <p class="tracking-[6px] text-gray-500 p-2">
          Land Landings{" "}
          <span class="tracking-[2px] text-white  capitalize">
            {capsule.land_landings}
          </span>
        </p>
      </div>
    </div>
  );
};

export default  React.memo(CapsuleDetails);
