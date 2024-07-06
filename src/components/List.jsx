import React, { useState } from 'react'
import { Dropdown } from "flowbite-react";
import Fruits from "../assets/fruits.png";
import Kaju from "../assets/kaju.png";
import Tea from"../assets/tea.png";
import Veges from "../assets/veges.png";
import Green from "../assets/green.png";
import Coconut from "../assets/coconut.png";
import Millets from "../assets/millet.png"
const List = () => {
    const initialItems = [
        { food: 'Fruits:', weeklyQuantity: '1000 grams' },
        { food: 'Vegetables', weeklyQuantity: '500 grams' },
        { food: 'Millets', weeklyQuantity: 'as needed' },
        { food: 'Coconut Water', weeklyQuantity: 'as needed' },
        { food: 'Sprouts/green leaves', weeklyQuantity: '100 grams' },
        { food: 'Dry Fruits', weeklyQuantity: '100 grams' },
        { food: 'Hunza Tea', weeklyQuantity: 'as needed' },
      ];

    const [items , SetItems] = useState(initialItems);
    const [food , Setfood] = useState("");
    const [selected , SetSelected] = useState("Weekly");
    const [weeklyQuantity, setWeeklyQuantity] = useState('');
    const [show , SetShow] = useState(false);
    

        const addItem=()=>{
       
            SetItems([...items , {food , weeklyQuantity}]);
            Setfood("");
            setWeeklyQuantity("");
            SetShow(false)
        
    }

    const foodChange=(event)=>{
       Setfood(event.target.value);
    }
 
    const visibleHandler=()=>{
        SetShow(true);
    }
    const newClick=()=>{
        SetShow(false);
    }
    
    
    const calculateQuantity = (quantity, period) => {
        let updatedQuantity = parseFloat(quantity);
        if (isNaN(updatedQuantity)) {
            return `${quantity} `; // Return the text as is
          }
        switch (period) {
          case 'Daily':
            updatedQuantity = updatedQuantity / 7 ;
            break;
          case 'Monthly':
            updatedQuantity = updatedQuantity * 4;
            break;
          case 'Weekly':
          default:
            // No change needed for Weekly as it's already weekly
            break;
        }
        return `${updatedQuantity.toFixed(2)} grams`;// To keep consistency in quantity formatting
      };
    
    const HandleSelect=(option)=>{
        SetSelected(option);
        
      }

  

  return (
    <>
    
    <div className=" absolute left-[900px] mt-[-32px] text-[20px] font-medium h-[40px] w-[100px] z-30 bg-white py-1 px-1 ml-[-90px] shadow-sm shadow-gray-300 hover:scale-105 transition-all duration-500 text-dark-gray">
                <Dropdown label={selected} className="" inline >
      <Dropdown.Item onClick={()=>HandleSelect("Daily")} >Daily</Dropdown.Item>
      <Dropdown.Item onClick={()=>HandleSelect("Weekly")}>Weekly</Dropdown.Item>
      <Dropdown.Item onClick={()=>HandleSelect("Monthly")}>Monthly</Dropdown.Item>
      
    </Dropdown>
              
                </div>
        
        {
            show && 
            <div className="flex flex-col gap-[10px] absolute z-30 h-[200px] w-[400px] rounded-lg justify-center items-center bg-lime-100 border border-dark-gray shadow-md shadow-dark-gray text-[20px]  ml-[350px] mt-[90px]">
         <button className="text-red-500 relative left-[170px] mt-[-20px] shadow-sm shadow-gray-500 h-[30px] w-[30px] hover:scale-105 transition-all duration-200" onClick={newClick}>x</button>
        <input className="w-[200px] border border-dark-gray rounded-md font-medium text-[18px]" type="text" 
         value={food}
         onChange={foodChange}
         placeholder=' enter Food'
         
        />
         
        <input className=" font-medium text-[18px] w-[200px] border border-dark-gray rounded-md" type="text"
        value={weeklyQuantity}
        placeholder='weekly quantity'
        onChange={(e) => setWeeklyQuantity(e.target.value)}
        />
        
         <button className="bg-gradient-to-r from-dark-gradient to-lime-200 py-2 px-2 rounded-lg text-[15px] hover:scale-105 transition-all duration-200 " onClick={addItem} >Add Item</button>


        </div>
        }
         <button className="absolute mt-[-50px] hover:scale-105  " onClick={visibleHandler} >+</button>
      <div className=" border-gray-200  mt-[40px] ml-[-50px]">

      <ul>
      <img src={Fruits} className='w-[20px] h-[20px] absolute ml-[50px] mt-[17px]' alt="" />
      <img src={Veges} className="w-[20px] h-[20px] absolute ml-[50px] mt-[90px] " alt="" />
      <img src={Millets} className="w-[20px] h-[20px] absolute ml-[50px] mt-[162px] "  alt="" />
      <img src={Coconut} className="w-[20px] h-[20px] absolute ml-[50px] mt-[225px] "  alt="" />
      <img src={Green} className="w-[20px] h-[20px] absolute ml-[50px] mt-[300px] "  alt="" />
      <img src={Kaju} className="w-[20px] h-[20px] absolute ml-[50px] mt-[370px] "  alt="" />
      <img src={Tea} className="w-[20px] h-[20px] absolute ml-[50px] mt-[440px] "  alt="" />
         {items.map( (item , index)=>{
            return <li key={index}  >
                
            <div className="flex gap-[650px] text-[20px] bg-my-blue w-[842px] h-[60px] border-[2px] mt-[10px] ml-[30px]">
             
            
            <div className="mt-[10px] ml-[50px] absolute">
            {item.food} 
            </div>
            <div className="mt-[10px] absolute left-[800px] ">
            {calculateQuantity(item.weeklyQuantity, selected)} 
            </div>

            </div>
            
             
            </li>
            
         })}

        </ul>

        <div className="flex flex-col justify-center items-center">
            <button className="h-[52px] w-[148px] bg-my-green mt-[50px]  hover:shadow-lg shadow-my-green transition-all duration-300 text-white text-[18px] rounded-md"> Buy Now</button>

            <div className=" relative flex flex-col  ml-[20px] ">
      <h1 className="text-[24px]" >INSTRUCTION</h1>
      <div className="bg-white h-[370px] w-[1240px] ">
       <p className="text-[16px] font-bold mt-[20px] ml-[20px]">Points to note for best benefit of FoodCription :</p>

       <div className="flex gap-16">

       <div className=' flex flex-col w-[600px]'>
         <p className="text-[14px] text-dark-gray font-normal ml-[20px] mt-[10px]">1. The Calculated Weight of the food is without Peel.</p>
         <p className="text-[14px] text-dark-gray font-normal ml-[20px] mt-[10px]">3. Wash Food and Hands properly before consuming.</p>
         <p className="text-[14px] text-dark-gray font-normal ml-[20px] mt-[10px]">5. Include more colorful foods, More colors equals more nutrients</p>
         <p className="text-[14px] text-dark-gray font-normal ml-[20px] mt-[10px]">7. Stay Hydrated throughout the Day.</p>
        
       </div>

       <div>
       <p className="text-[14px] text-dark-gray font-normal ml-[20px] mt-[10px]">2. Chew Properly (32 times - approximately) for best Digestion.</p>
       <p className="text-[14px] text-dark-gray font-normal ml-[20px] mt-[10px]">4. Boil / Steam vegetables, if needed.</p>
       <p className="text-[14px] text-dark-gray font-normal ml-[20px] mt-[10px]">6. Eat Mindfully- Do not engage in other activities (TV, Talks etc) while eating.</p>
       </div>

       </div>
       
       <h1  className="text-[18px] font-medium mt-[20px] ml-[20px]">IMPORTANT NOTE:</h1>

       <p className="text-[14px] text-dark-gray font-normal mt-[6px] ml-[20px]">The FoodCription Protocol is inspired and curated from <span className="underline font-bold text-[16px]">'Verified Health Sources'</span> . This is not a replacement for Medical Advice and does not work in case of emergency.</p>
       <p className="text-[14px] text-dark-gray font-normal mt-[15px] ml-[20px]">Consult, Discuss the protocol with your Healthcare Professional. FoodCription recommends Lifestyle advice Protocol backed by research to help address root cause of diseases.</p>
       <p className="text-[14px] text-dark-gray font-normal mt-[15px] ml-[20px]">This advice is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a life-threatening emergency that requires immediate attention please call 102 or the number for your local emergency service.</p>
      </div>
      
     </div>
            
        </div>
        

      </div>
       
      
      
   
    </>
    
  )
}

export default List
