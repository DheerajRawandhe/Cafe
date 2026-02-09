
import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import Video from ".././assets/Bubbingo_cafe_video.mp4";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const HereSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();


  const menuItems = [
  {
    id: 1,
    name: "Veg Cheese Sandwich",
    price: "₹89",
    image: "../../public/images/s.avif",
  },
  {
    id: 2,
    name: "Veg Burger",
    price: "₹49",
    image: "../../public/cafe items/burgger.avif",
  },
  {
    id: 3,
    name: "French Fries",
    price: "₹49",
    image: "../../public/cafe items/w1.avif",
  },
  {
    id: 4,
    name: "Hot Coffee",
    price: "₹29",
    image: "../../public/cafe items/c.avif",
  },

  {
    id: 5,
    name: "Ice-cream",
    price: "₹49",
    image: "../../public/cafe items/Ice-cream.avif",
  },
  {
    id: 6,
    name: "Meggie",
    price: "₹39",
    image: "../../public/cafe items/meggie.avif",
  },
  {
    id: 7,
    name: "Triple Chocolate Waffle",
    price: "₹149",
    image: "../../public/cafe items/w2.avif",
  },

  {
    id: 8,
    name: "Mocktails",
    price: "₹139",
    image: "../../public/cafe items/Mocktails.avif",
  },


  {
    id: 9,
    name: "Nachos",
    price: "₹89",
    image: "../../public/cafe items/nachos.avif",
  },
  {
    id: 10,
    name: "Bubbingo Special Sandwich",
    price: "₹149",
    image: "../../public/cafe items/Bubbingo Special Sandwich.avif",
  },
  {
    id: 11,
    name: "Shakes",
    price: "₹99",
    image: "../../public/cafe items/shakes.avif",
  },
  {
    id: 12  ,
    name: "Chocolate Ice Cream",
    price: "₹49",
    image: "../../public/cafe items/ice.avif",
  },
];


  return (
    <>
   
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-between m-4 gap-10">
      
      {/* ===================== Left side: Text Section ================== */}

      <div className="flex flex-col gap-10 md:w-1/2">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food anytime & anywhere
          </h1>
          <p className="text-gray-500">
            Hey! Our Delicious food is waiting for you, we are always near to you.
          </p>
        </div>
      
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            placeholder="Search Food, Dishes & Restaurant-Name "
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />
          <Button 
            onClick={() => navigate(`/search/${searchText}`)} 
            className="bg-orange hover:bg-hoverOrange"
          >
            Search
          </Button>
        </div>
      </div>

      {/* ======================= Right side: Video Section ===================== */}
      
      {/* <div className="relative md:w-1/2 h-[400px] overflow-hidden rounded-2xl">
        <video 
          src={Video} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl">
          <h1 className="text-white text-3xl font-bold text-center">
            Welcome to Bubbingo_Cafe
          </h1>
        </div>
      </div> */}



        {/* ======================================= */}

<div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
  <video
    src={Video}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover rounded-2xl"
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl px-3">
    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-snug drop-shadow-md">
      Welcome to Bubbingo_Cafe
    </h1>
  </div>
</div>

    </div>


{/* ===================== Menus ======================================= */}

<div className="max-w-7xl mx-auto px-4 py-10">
  <h1 className="text-3xl font-bold mb-6">Menus</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {menuItems.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-t-xl"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">{item.price}</p>

<Link to="https://www.swiggy.com/city/amravati/bubbingo-fast-food-cafe-sai-nagar-guruchhaya-colony-rest1189624">

          <button className="mt-3 w-full bg-orange text-white py-2 rounded-lg hover:bg-hoverOrange">
            Add to Cart
          </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

 
{/* 
<div className="max-w-7xl mx-auto px-4 py-10">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {menuItems.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-t-xl"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">{item.price}</p>

          <button className="mt-3 w-full bg-orange text-white py-2 rounded-lg hover:bg-hoverOrange">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>  */}
 
 </>
  );
};

export default HereSection;
