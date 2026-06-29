import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Component/Nav";
import listings from "../data/Listings";

function Home() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const filteredListings = listings.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.location
        .toLowerCase()
        .includes(search.toLowerCase());

        

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Nav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {filteredListings.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              navigate(`/listing/${item.id}`)
            }
            className="cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition duration-300"
            />

            <div className="mt-3">
              <h2 className="font-semibold text-lg">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm">
                {item.location}
              </p>

              <p className="mt-1">
                <span className="font-semibold">
                  ₹{item.price.toLocaleString()}
                </span>{" "}
                night
              </p>
            </div>
          </div>
        ))}

        {filteredListings.length === 0 && (
          <div className="col-span-full text-center text-xl text-gray-500 mt-10">
            No listings found.
          </div>
        )}
      </div>
    </>
  );
}

export default Home;