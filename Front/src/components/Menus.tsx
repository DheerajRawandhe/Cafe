// import { MenuItem } from "@/types/restaurantType";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardFooter } from "./ui/card";
// import { useCartStore } from "@/store/useCartStore";
// import { useNavigate } from "react-router-dom";

// const AvailableMenu = ({ menus }: { menus: MenuItem[] }) => {
//   const { addToCart } = useCartStore();
//   const navigate = useNavigate();
//   return (
//     <div className="md:p-4">
//       <h1 className="text-xl md:text-2xl font-extrabold mb-6">
//         Available Menus
//       </h1>
//       <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
//         {menus.map((menu: MenuItem) => (
//           <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
//             <img src={menu.image} alt="" className="w-full h-40 object-cover" />
//             <CardContent className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//                 {menu.name}
//               </h2>
//               <p className="text-sm text-gray-600 mt-2">{menu.description}</p>
//               <h3 className="text-lg font-semibold mt-4">
//                 Price: <span className="text-[#D19254]">₹{menu.price}</span>
//               </h3>
//             </CardContent>
//             <CardFooter className="p-4">
//               <Button
//                 onClick={() => {
//                   addToCart(menu);
//                   navigate("/cart");
//                 }}
//                 className="w-full bg-orange hover:bg-hoverOrange"
//               >
//                 Add to Cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AvailableMenu;



// ========================================================================================== //


// import { MenuItem } from "@/types/restaurantType";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardFooter } from "./ui/card";
// import { useCartStore } from "@/store/useCartStore";
// import { useNavigate } from "react-router-dom";

// type MenusProps = {
//   menus?: MenuItem[]; // make it optional
// };

// const Menus = ({ menus = [] }: MenusProps) => {
//   const { addToCart } = useCartStore();
//   const navigate = useNavigate();

//   // If menus array is empty
//   if (!menus.length) {
//     return (
//       <div className="md:p-4 text-center">
//         <h1 className="text-xl md:text-2xl font-extrabold mb-4">
//           Available Menus
//         </h1>
//         <p className="text-gray-500">No menus available right now.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="md:p-4">
//       <h1 className="text-xl md:text-2xl font-extrabold mb-6">
//         Available Menus
//       </h1>
//       <div className="grid md:grid-cols-3 gap-6">
//         {menus.map((menu: MenuItem) => (
//           <Card
//             key={menu.id}
//             className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden"
//           >
//             <img
//               src={menu.image}
//               alt={menu.name}
//               className="w-full h-40 object-cover"
//             />
//             <CardContent className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//                 {menu.name}
//               </h2>
//               <p className="text-sm text-gray-600 mt-2">{menu.description}</p>
//               <h3 className="text-lg font-semibold mt-4">
//                 Price: <span className="text-[#D19254]">₹{menu.price}</span>
//               </h3>
//             </CardContent>
//             <CardFooter className="p-4">
//               <Button
//                 onClick={() => {
//                   addToCart(menu);
//                   navigate("/cart");
//                 }}
//                 className="w-full bg-orange hover:bg-hoverOrange"
//               >
//                 Add to Cart
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menus;




/////////////////////////////////////////////////////////////////////////



import { useRestaurantStore } from "@/store/useRestaurantStore";
import AvailableMenu from "./AvailableMenu";
// import { Badge } from "./ui/badge";
// import { Timer } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
  const params = useParams();
  const { singleRestaurant, getSingleRestaurant } = useRestaurantStore();

  useEffect(() => {
    getSingleRestaurant(params.id!); 
    
  }, [params.id]);

  
// const menuData = [
//   {
//     category: "Shakes",
//     items: [
//       { name: "Chocolate Shake", price: 59 },
//       { name: "Oreo Shake", price: 79 },
//       { name: "KitKat Shake", price: 109 },
//       { name: "Ferrero Rocher Shake", price: 119 },
//     ],
//   },
//   {
//     category: "Ice Cream",
//     items: [
//       { name: "Vanilla Ice Cream", price: 49 },
//       { name: "Chocolate Ice Cream", price: 59 },
//       { name: "Mango Ice Cream", price: 79 },
//       { name: "Brownie Ice Cream", price: 79 },
//     ],
//   },
//   {
//     category: "Coffee",
//     items: [
//       { name: "Hot Coffee", price: 29 },
//       { name: "Cold Coffee", price: 49 },
//       { name: "Cold Coffee with Crush", price: 59 },
//     ],
//   },
//   {
//     category: "Burgers",
//     items: [
//       { name: "Veg Burger", price: 49 },
//       { name: "Veg Cheese Burger", price: 69 },
//       { name: "Paneer Burger", price: 89 },
//     ],
//   },
//   {
//     category: "Sandwiches",
//     items: [
//       { name: "Veg Sandwich", price: 79 },
//       { name: "Veg Cheese Sandwich", price: 89 },
//       { name: "Paneer Masala Sandwich", price: 99 },
//     ],
//   },
//   {
//     category: "Waffles",
//     items: [
//       { name: "Dark Chocolate Waffle", price: 49 },
//       { name: "Nutella Waffle", price: 69 },
//       { name: "KitKat Waffle", price: 79 },
//     ],
//   },
// ];


// const menuData = [
//   {
//     category: "🍕 Pizza",
//     items: [
//       { name: "Margherita Pizza", price: 99, icon: "🍕" },
//       { name: "Cheese Pizza", price: 129, icon: "🧀🍕" },
//       { name: "Veg Loaded Pizza", price: 149, icon: "🥦🍕" },
//     ],
//   },
//   {
//     category: "🍔 Burgers",
//     items: [
//       { name: "Veg Burger", price: 49, icon: "🍔" },
//       { name: "Cheese Burger", price: 69, icon: "🧀🍔" },
//       { name: "Paneer Burger", price: 89, icon: "🧈🍔" },
//     ],
//   },
//   {
//     category: "🥪 Sandwiches",
//     items: [
//       { name: "Veg Sandwich", price: 79, icon: "🥪" },
//       { name: "Cheese Sandwich", price: 89, icon: "🧀🥪" },
//       { name: "Paneer Sandwich", price: 99, icon: "🧈🥪" },
//     ],
//   },
//   {
//     category: "🧇 Waffles",
//     items: [
//       { name: "Chocolate Waffle", price: 79, icon: "🍫🧇" },
//       { name: "Nutella Waffle", price: 99, icon: "🍫🧇" },
//       { name: "KitKat Waffle", price: 109, icon: "🍫🧇" },
//     ],
//   },
//   {
//     category: "🥤 Shakes",
//     items: [
//       { name: "Chocolate Shake", price: 59, icon: "🥤" },
//       { name: "Oreo Shake", price: 79, icon: "🥤🍪" },
//       { name: "KitKat Shake", price: 109, icon: "🥤🍫" },
//     ],
//   },
//   {
//     category: "☕ Coffee",
//     items: [
//       { name: "Hot Coffee", price: 29, icon: "☕" },
//       { name: "Cold Coffee", price: 49, icon: "🧊☕" },
//       { name: "Coffee with Chocolate", price: 69, icon: "☕🍫" },
//     ],
//   },
// ];


// -------------------------------------------------------------

const menuData = [
  {
    category: "🥪Sandwiches",
    items: [
      { name: "Veg Sandwich (Plain)", price: 79 },
      { name: "Chocolate Sandwich", price: 79 },
      { name: "Veg Cheese Sandwich", price: 89 },
      { name: "Veg Cheese Sezwan Sandwich", price: 89 },
      { name: "Onion Capsicum Cheese Sandwich", price: 89 },
      { name: "Corn Cheese Sandwich", price: 89 },
      { name: "Paneer Masala Sandwich", price: 99 },
      { name: "Paneer Peri Peri Sandwich", price: 99 },
      { name: "Veg Cheese Chilli Sandwich", price: 99 },
      { name: "Paneer Masala Cheese Sandwich", price: 109 },
      { name: "Paneer Corn Cheese Sandwich", price: 109 },
      { name: "Bombay Sandwich", price: 109 },
      // { name: "Veg Overload Grill Sandwich", price: 109 },
      // { name: "Jungli Sandwich", price: 129 },
      // { name: "BubbinGO Special Sandwich", price: 129 },
      // { name: "Jamun Shot", price: 39 },
    ],
  },
  {
    category: "🧇 Waffles",
    items: [
      { name: "Dark Chocolate Waffle", price: "49 " },
      { name: "White Choco Waffle", price: "49 " },
      { name: "Triple Chocolate Waffle", price: "59 " },
      { name: "Honey Waffle", price: "69 " },
      { name: "Nutella Waffle", price: "69 " },
      { name: "Strawberry Waffle", price: "69 " },
      { name: "Oreo Blast Waffle", price: "69 " },
      { name: "Blueberry Waffle", price: "69 " },
      { name: "KitKat Waffle", price: "79 " },
      { name: "Brownie Waffle", price: "79 " },
      { name: "Biscoff Waffle", price: "89 " },
    ],
  },

  {
    category: " 🍔 Burgers",
    items: [
      { name: "Veg Burger", price: 49 },
      { name: "Veg Cheese Burger", price: 69 },
      { name: "Paneer Burger", price: 89 },
      { name: "Paneer Cheese Burger", price: 89 },
      { name: "Spinach Corn Burger", price: 79 },
      { name: "Spinach Cheese Corn Burger", price: 89 },
    ],
  
  },

  {
    category: "🍟 French Fries",
    items: [
      { name: "French Fries", price: 49 },
      { name: "Masala Fries", price: 69 },
      { name: "Peri Peri Fries", price: 79 },
      { name: "Cheese Fries", price: 99 },
    ],
  },

  {
    category: " 🧀 Nachos",
    items: [
      { name: "Nachos", price: 79 },
      { name: "Veg Loaded Nachos", price: 89 },
      { name: "Cheesy Nachos", price: 99 },
      { name: "Mexican Nachos", price: 99 },
    ],
  },

  {
    category: "🥤  Shakes",
    items: [
      { name: "Chocolate Shake", price: 59 },
      { name: "Oreo Shake", price: 79 },
      { name: "Strawberry Shake", price: 79 },
      { name: "Mango Shake", price: 79 },
      { name: "KitKat Shake", price: 109 },
      { name: "Ferrero Rocher Shake", price: 119 },
    ],
  },

  {
    category: "🍨Ice Cream",
    items: [
      { name: "Vanilla Ice Cream", price: 49 },
      { name: "Chocolate Ice Cream", price: 59 },
      { name: "Butterscotch Ice Cream", price: 49 },
      { name: "Brownie Ice Cream", price: 79 },
    ],
  },

  {
    category: "☕ Coffee",
    items: [
      { name: "Hot Coffee", price: 29 },
      { name: "Black Coffee", price: 29 },
      { name: "Cold Coffee", price: 49 },
      { name: "Cold Coffee with Crush", price: 59 },
      { name: "Coffee with Chocolate & Crush", price: 69 },
    ],
  },
];



  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        {/* <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img
            src={singleRestaurant?.imageUrl || "Loading..."}
            alt="res_image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div> */}
        {/* <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">{singleRestaurant?.restaurantName || "Loading..."}</h1>
            <div className="flex gap-2 my-2">
              {singleRestaurant?.cuisines.map((cuisine: string, idx: number) => (
                <Badge key={idx}>{cuisine}</Badge>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time: <span className="text-[#D19254]">{singleRestaurant?.deliveryTime || "NA"} mins</span>
                </h1>
              </div>
            </div>
          </div>
        </div> */}

       {/* {singleRestaurant?.menus && <AvailableMenu menus = {singleRestaurant?.menus!}/>}  */}


{/* ================================================================================================= */}


    <div className="bg-[#2b2b2b] text-white py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Menu</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {menuData.map((section, index) => (
          <div key={index} className="border-r border-gray-600 pr-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              {section.category}
            </h2>

            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between border-b border-gray-700 pb-1"
                >
                  <span>{item.name}</span>
                  <span>₹ {item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>





      </div>
    </div>
  );
};

export default RestaurantDetail;
