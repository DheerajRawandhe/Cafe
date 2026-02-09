
// import { IndianRupee , Hamburger } from "lucide-react";
// import { Separator } from "./ui/separator";
// import { Link } from "react-router-dom";
// import { Button } from "./ui/button";
// import { useOrderStore } from "@/store/useOrderStore";
// import { useEffect } from "react"; 
// import { CartItem } from "@/types/cartType";

// const Success = () => {
//   const { orders, getOrderDetails } = useOrderStore();

//   useEffect(() => { 
    
//     getOrderDetails();
//   }, []);

//   if (orders.length === 0)
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">
//           Order not found!
//         </h1>
//       </div>
//     );

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//    {/* <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">  */}    {/* //light mode */}

//       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//             Order Status :{" "}
//             <span className="text-[#FF5A5A]">{"confirm".toUpperCase()}</span>
//           </h1>
//         </div>
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
//             Order Summary
//           </h2>
//           {/* Your Ordered Item Display here  */}
//           {orders.map((order:any, index:number) => (
//             <div key={index}>
//               {order.cartItems.map((item:CartItem) => (
//                 <div className="mb-4">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <img
//                         src={item.image}
//                         alt=""
//                         className="w-14 h-14 rounded-md object-cover"
//                       />
//                       <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
//                         {item.name}
//                       </h3>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-gray-800 dark:text-gray-200 flex items-center">
//                         <IndianRupee />
//                         <span className="text-lg font-medium">{item.price}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <Separator className="my-4" />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <Link to="/cart">
//           <Button className="bg-orange hover:bg-hoverOrange w-full py-3 rounded-md shadow-lg">
//             {/* Continue Shopping */}
//             Order More Dishes <Hamburger />
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Success;




// ======================================================------------------///



import React from 'react';
import { CheckCircle, MapPin, Clock, Phone } from 'lucide-react';

const OrderStatus = () => {
  // Yeh data backend se aayega, abhi dummy hai
  const steps = [
    { title: 'Order Placed', time: '12:30 PM', completed: true },
    { title: 'Order Confirmed', time: '12:32 PM', completed: true },
    { title: 'Food is being prepared', time: 'In Progress', completed: false, active: true },
    { title: 'Out for Delivery', time: '-', completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Top Card: Estimated Time */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 flex justify-between items-center border-l-8 border-orange-500">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">ESTIMATED DELIVERY TIME</h2>
            <p className="text-2xl font-bold text-gray-800">25 - 35 mins</p>
          </div>
          <div className="bg-orange-100 p-3 rounded-full">
            <Clock className="text-orange-600" size={32} />
          </div>
        </div>

        {/* Middle Section: Live Tracking & Stepper */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="font-bold text-lg">Bubbingo Fast Food Cafe</h3>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <MapPin size={14} /> Guruchhaya Colony, Amravati
            </p>
          </div>

          {/* Stepper (Vertical Timeline) */}
          <div className="p-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 relative pb-8 last:pb-0">
                {/* Vertical Line */}
                {index !== steps.length - 1 && (
                  <div className={`absolute left-[11px] top-6 w-[2px] h-full ${step.completed ? 'bg-orange-500' : 'bg-gray-200'}`} />
                )}
                
                {/* Circle Icon */}
                <div className="z-10">
                  {step.completed ? (
                    <CheckCircle className="text-orange-500 bg-white" size={24} />
                  ) : (
                    <div className={`w-6 h-6 rounded-full border-4 bg-white ${step.active ? 'border-orange-500' : 'border-gray-200'}`} />
                  )}
                </div>

                {/* Text */}
                <div className="flex justify-between w-full">
                  <div>
                    <p className={`font-semibold ${step.active ? 'text-orange-600' : 'text-gray-800'}`}>{step.title}</p>
                    <p className="text-xs text-gray-400">Step details here</p>
                  </div>
                  <p className="text-sm text-gray-500">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Delivery Partner */}
        <div className="mt-6 bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img src="../../public/cook/cook.jpg" alt="Delivery Guy" />
            </div>
            <div>
              <p className="font-bold">Rahul Kumar</p>
              <p className="text-xs text-gray-500">Your delivery partner</p>
            </div>
          </div>
          <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition">
            <Phone size={20} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderStatus;
