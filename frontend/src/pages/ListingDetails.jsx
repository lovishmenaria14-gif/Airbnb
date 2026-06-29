import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import listings from "../data/Listings";
import Nav from "../Component/Nav";
import ListingMap from "../Component/ListingMap";

function ListingDetails() {
  const { id } = useParams();

  const house = listings.find(
    (item) => String(item.id) === String(id)
  );

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [rating, setRating] = useState(5);
const [comment, setComment] = useState("");

const [reviews, setReviews] = useState([]);
useEffect(() => {
  if (!house) return;

  const saved =
    JSON.parse(
      localStorage.getItem(`reviews-${house.id}`)
    ) || [];

  setReviews(saved);
}, [house]);
  if (!house) {
    return (
      <>
        <Nav />
        <div className="p-8 text-xl">
          Listing not found
        </div>
      </>
    );
  }

  const days =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.ceil(
            (new Date(checkOut) - new Date(checkIn)) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const total = days * house.price;
  const averageRating =
  reviews.length > 0
    ? (
        reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        ) / reviews.length
      ).toFixed(1)
    : "No ratings";

const handleBooking = () => {
  const newBooking = {
    id: Date.now(),
    title: house.title,
    image: house.image,
    location: house.location,
    checkIn,
    checkOut,
    total,
  };

  const old =
    JSON.parse(localStorage.getItem("bookings")) || [];

  localStorage.setItem(
    "bookings",
    JSON.stringify([...old, newBooking])
  );

  setShowPopup(true);
};
const handleReview = () => {
  if (!comment.trim()) return;

  const newReview = {
    id: Date.now(),
    rating,
    comment,
  };

  const updatedReviews = [...reviews, newReview];

  setReviews(updatedReviews);

  localStorage.setItem(
    `reviews-${house.id}`,
    JSON.stringify(updatedReviews)
  );

  setComment("");
  setRating(5);
};

  return (
    <>
      <Nav />

      <div className="max-w-6xl mx-auto p-8">
        <img
          src={house.image}
          alt={house.title}
          className="w-full h-[450px] object-cover rounded-3xl"
        />

        <h1 className="text-3xl font-bold mt-6">
          {house.title}
        </h1>

        <p className="text-gray-500">
          {house.location}
        </p>
        <p className="mt-2 text-lg">
  ⭐ {averageRating}
  {reviews.length > 0 &&
    ` (${reviews.length} reviews)`}
</p>

        <p className="mt-3 text-xl font-semibold">
          ₹{house.price.toLocaleString()} / night
        </p>

        {/* MAP */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Location
          </h2>

          <ListingMap
            latitude={house.latitude}
            longitude={house.longitude}
            title={house.title}
          />
        </div>

        {/* BOOKING CARD */}
        <div className="mt-8 border rounded-3xl p-6 shadow-md max-w-md">
          <h2 className="text-xl font-semibold mb-5">
            Book your stay
          </h2>

          <label className="text-sm">
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) =>
              setCheckIn(e.target.value)
            }
            className="border w-full p-2 rounded-lg mb-4"
          />

          <label className="text-sm">
            Check Out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) =>
              setCheckOut(e.target.value)
            }
            className="border w-full p-2 rounded-lg mb-4"
          />

          <div className="mb-5">
            <p>Days: {days}</p>
            <p className="font-semibold text-lg">
              Total: ₹{total.toLocaleString()}
            </p>
          </div>

          <button className="border w-full py-2 rounded-xl mb-3">
            Pay Now 💳
          </button>

          <button
            onClick={handleBooking}
            disabled={days === 0}
            className={`w-full py-3 rounded-xl text-white ${
              days === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-rose-500"
            }`}
          >
            Reserve
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-3xl w-[400px] text-center">
            <h2 className="text-2xl font-bold mb-3">
              Booking Confirmed 🎉
            </h2>

            <img
              src={house.image}
              alt={house.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <p className="font-semibold">
              {house.title}
            </p>

            <p className="text-gray-500">
              {house.location}
            </p>

            <p className="mt-3 font-bold">
              Total: ₹{total.toLocaleString()}
            </p>

            <button
              onClick={() =>
                setShowPopup(false)
              }
              className="mt-5 bg-rose-500 text-white px-6 py-2 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ListingDetails;