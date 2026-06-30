import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  User,
  Bed,
  Home,
  Waves,
  Trees,
  Tent,
  Mountain,
} from "lucide-react";
import { authDataContext } from "../Context/AuthContext";

function Nav({
  selectedCategory,
  setSelectedCategory,
  search,
  setSearch,
})  {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { user, setUser } =
    useContext(authDataContext);

  const categories = [
    { name: "All", icon: <Home size={20} /> },
    { name: "Rooms", icon: <Bed size={20} /> },
    {
      name: "Amazing Views",
      icon: <Mountain size={20} />,
    },
    { name: "Villas", icon: <Home size={20} /> },
    { name: "Pools", icon: <Waves size={20} /> },
    {
      name: "Beachfront",
      icon: <Waves size={20} />,
    },
    { name: "Cabins", icon: <Trees size={20} /> },
    { name: "Camping", icon: <Tent size={20} /> },
    { name: "Farms", icon: <Trees size={20} /> },
  ];

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
    setOpen(false);
  };

  return (
    <>
      
      <nav className="h-20 border-b border-gray-200 bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-50 gap-4">
      
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0"
        >
          <img
            src="/airbnb.png"
            alt="logo"
            className="w-9 h-9"
          />

          <span className="text-2xl font-bold text-rose-500 hidden md:block">
            airbnb
          </span>
        </Link>

       
       <div className="hidden md:flex items-center border border-gray-300 rounded-full shadow-sm px-4 py-2 gap-3 flex-1 max-w-xl">
  <input
    type="text"
    placeholder="Search by city or property..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="outline-none w-full text-sm"
  />

  <button className="bg-rose-500 p-2 rounded-full text-white">
    <Search size={16} />
  </button>
</div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="hidden lg:block font-medium hover:bg-gray-100 px-4 py-2 rounded-full transition">
            Airbnb your home
          </button>

          <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 border border-gray-300 rounded-full px-3 py-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Menu size={18} />

              <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                {user?.name?.charAt(0)?.toUpperCase() ||
                  "L"}
              </div>
            </div>

            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border overflow-hidden z-[9999]">
                <button
                  onClick={() => {
                    navigate("/bookings");
                    setOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 hover:bg-gray-100"
                >
                  My Bookings
                </button>

                {user ? (
                  <>
                    <button
                      className="w-full text-left px-5 py-3 hover:bg-gray-100"
                    >
                      Profile
                    </button>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setOpen(false);
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100"
                    >
                      Login
                    </button>

                    <button
                      onClick={() => {
                        navigate("/signup");
                        setOpen(false);
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>


     <div className="flex gap-10 overflow-x-auto px-6 md:px-10 py-4 border-b bg-white">
  {categories.map((item) => (
    <div
      key={item.name}
      onClick={() =>
        setSelectedCategory(item.name)
      }
      className={`flex flex-col items-center cursor-pointer min-w-fit pb-2 ${
        selectedCategory === item.name
          ? "text-black border-b-2 border-black"
          : "text-gray-500"
      }`}
    >
      {item.icon}

      <span className="text-xs mt-2">
        {item.name}
      </span>
    </div>
  ))}
</div>
    </>
  );
}

export default Nav;