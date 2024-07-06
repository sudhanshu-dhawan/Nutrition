import './App.css';
import R from "./assets/Rx.png"
import Man from "./assets/man.png"
import FileImage from "./assets/file.png"
import List from "./components/List"
import Scooter from "./assets/scooter.png"
// import { Dropdown } from "flowbite-react";
// import { useState } from 'react';
function App() {
  

  return (
    <div className="font-bold text-[36px] bg-lime-50 h-[2500px]">
      <img src={R} className="h-[95.5px] w-[100px] relative top-[52px] left-[150px] " alt="" />
      <h1 className="text-[20px] relative left-[1157px] text-dark-gray">Date: 18 June 2024</h1>
     <div className="bg-gradient-to-r from-dark-gradient to-light-gradient w-[1139.35px] ml-[200px] h-[8px]  "></div>
     
     <div className="flex flex-col items-center justify-center mt-[50px]">
 
     <div className="w-[1170px] h-[680px] bg-white " >
           
           <div className="flex flex-col"> 

           <div className="flex">
         <img src={Man} alt="" className="h-[50px] w-[50px] rounded-full absolute mt-[30px] ml-[30px]" />
         <div className="flex flex-col items-center justify-center">
         <h1 className="text-[18px] mt-[30px] ml-[100px] font-medium ">Dr. Darlene Robertson</h1>
         <p className="text-[14px] text-dark-gray font-medium">Nutritionist</p>
         </div>
          <div className="flex">
          <h1 className="text-my-green text-[16px] font-medium ml-[500px] mt-[50px]">Lorem ipsum dolor sit amet consectetur.</h1>
          <img src={FileImage} className="h-[40px] w-[70px] mt-[40px]" alt="" />
          </div>
         
         
           </div>
           <div className="h-[1.5px] bg-lime-200 w-[1083px] mt-[30px] ml-[30px]"></div>
           </div>

           <div className="bg-lime-100 w-[1083px] h-[245px] rounded-lg  mt-[30px] ml-[30px]">

            <div className="flex text-[18px] gap-[350px] ml-[20px] font-medium  ">
              <h1 className="mt-[20px]">Rx</h1>
              <h1 className="mt-[20px] ml-[50px]">Duration</h1>
              <h1 className="mt-[20px] ml-[90px]">Duration</h1>
            </div>
             {/* flex containers */}
              
              <div className="flex">

              <div className="flex flex-col">

<div className="flex">
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[20px] mt-[5px] w-[392px] items-center border-b-[1px] border-gray-500 ">
   <h1 className="text-dark-gray mt-[7px] ml-[14px]">1. Lorem ipsum dolor sit amet consectetur.</h1>
 </div>
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[3px] mt-[5px] w-[120px]  border-r-2  items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px] text-center">100g</h1>
 </div>
 
</div>


<div className="flex">
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[20px] mt-[1px] w-[392px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px]">2. Lorem ipsum dolor sit amet consectetur.</h1>
 </div>
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[3px]  border-r-2  mt-[1px] w-[120px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px] text-center">100g</h1>
 </div>
 
</div>


<div className="flex">
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[20px] mt-[px] w-[392px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px]">3. Lorem ipsum dolor sit amet consectetur.</h1>
 </div>
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[3px]  border-r-2  mt-[1px] w-[120px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px] text-center">100g</h1>
 </div>
 
</div>


<div className="flex">
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[20px] mt-[px] w-[392px] items-center ">
   <h1 className="text-dark-gray mt-[7px] ml-[14px]">4. Lorem ipsum dolor sit amet consectetur.</h1>
 </div>
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[3px] border-r-2  mt-[-1px] w-[120px] items-center border-t-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px] text-center">100g</h1>
 </div>
 
</div>



</div>


<div className="flex flex-col ml-[-19px]">

<div className="flex">
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[20px] mt-[5px] w-[392px] items-center border-b-[1px] border-gray-500 ">
   <h1 className="text-dark-gray mt-[7px] ml-[14px]">5. Lorem ipsum dolor sit amet consectetur.</h1>
 </div>
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[3px] mt-[5px] w-[120px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px] text-center">100g</h1>
 </div>
 
</div>


<div className="flex">
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[20px] mt-[1px] w-[392px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px]">6. Lorem ipsum dolor sit amet consectetur.</h1>
 </div>
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[3px] mt-[1px] w-[120px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px] text-center">100g</h1>
 </div>
 
</div>


<div className="flex">
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[20px] mt-[px] w-[392px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px]">7. Lorem ipsum dolor sit amet consectetur.</h1>
 </div>
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[3px] mt-[1px] w-[120px] items-center border-b-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px] text-center">100g</h1>
 </div>
 
</div>


<div className="flex">
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[20px] mt-[px] w-[392px] items-center ">
   <h1 className="text-dark-gray mt-[7px] ml-[14px]">8. Lorem ipsum dolor sit amet consectetur.</h1>
 </div>
 <div className="bg-white text-[16px] font-medium h-[42px] ml-[3px] mt-[-1px] w-[120px] items-center border-t-[1px] border-gray-500">
   <h1 className="text-dark-gray mt-[7px] ml-[14px] text-center">100g</h1>
 </div>
 
</div>



</div>




              </div>

            
            <div className="bg-lime-100 w-[1083px] h-[230px] rounded-lg mt-[54px]  flex ">
              <div>
              <h1 className="text-[24px] font-medium relative top-[20px] left-[27px]" >Advice</h1>
              <div className="bg-white h-[126px] w-[1030px] ml-[25px] mt-[30px] rounded-lg">
                <p className="text-[16px] text-dark-gray font-medium relative top-[10px] ml-[20px]">Lorem ipsum dolor sit amet consectetur. Volutpat facilisi porta phasellus tempor. In fusce dolor mi id adipiscing. Et lacus lorem nunc amet. Non dolor purus egestas massa tincidunt donec lacinia. Volutpat odio ac maecenas amet. Nullam volutpat nulla lectus et. Sed eu fermentum urna enim augue.</p>
              </div>
              </div>
              
            </div>
            <div className="flex justify-center items-center  ml-[-200px] mt-[100px] " >
              <h1 className=" text-[20px] ">HEALTHY GROCERY LIST</h1>
              
             
              </div>

            <List/>

            <div className="absolute left-[1040px] top-[1005px] ">
              <img src={Scooter}  className="h-[480px] w-[300px]" alt="" />
            </div>

            

           </div>
          

     </div>

     

    

     </div>
     
    
    </div>
  );
}

export default App;
