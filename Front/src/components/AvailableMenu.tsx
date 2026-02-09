
import { MenuItem } from "@/types/restaurantType";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useCartStore } from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import img from "../../public/images/burger1.png"

const AvailableMenu = ({ menus }: { menus: MenuItem[] }) => {
    
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-extrabold mb-6 text-center">
        Available Menus
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {/* {menus.map((menu: MenuItem) => ( */}
          
          <Card
            // key={menu.name}
            className="w-[250px] h-[370px] mx-auto shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Image */}
            <div className="w-full h-32 bg-white flex items-center justify-center">
              <img
                // src={menu.image}
                src={img}
                // alt={menu.name}
                className="h-28 w-auto object-contain"
              />
            </div>

            <CardContent className="px-4 py-3 text-center">
              {/* <h2 className="text-lg font-semibold text-gray-800 dark:text-white">        //dark --> white (menu name)Text */}
              <h2 className="text-lg font-semibold text-gray-800 ">
                {/* {menu.name} */}
                Burgger
                
              </h2>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {/* {menu.description} */}
                This is Burgger!

              </p>
              <h3 className="text-base font-semibold mt-2">
                Price : <span className="text-[#D19254]">₹49
                  {/* {menu.price} */}

                  </span>
              </h3>
            </CardContent>

            {/* Add to Cart Button */}
            <CardFooter className="px-4 pb-4">
              <Button
                onClick={() => {
                  // addToCart(menu);
                  navigate("/cart");
                }}
                className="w-full bg-orange hover:bg-hoverOrange text-sm py-2"
              >
                Add to Cart <ShoppingCart />
              </Button>
            </CardFooter>
          </Card>
        {/*  ))} */}
      </div>
    </div>
  );
};

export default AvailableMenu;





