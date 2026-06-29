import { useEffect, useState } from "react";
import Nav from "../Component/Nav";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(data);
  }, []);

  const handleDelete = (id) => {
  const ok = window.confirm(
    "Are you sure you want to cancel this booking?"
  );

  if (!ok) return;

  const updatedBookings = bookings.filter(
    (booking) => booking.id !== id
  );

  setBookings(updatedBookings);

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );
};
  return (
    <>
      <Nav />

      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <p className="text-gray-500">
            No bookings yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="border rounded-3xl overflow-hidden shadow-md"
              >
                <img
                  src={booking.image}
                  alt={booking.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h2 className="text-xl font-semibold">
                    {booking.title}
                  </h2>

                  <p className="text-gray-500">
                    {booking.location}
                  </p>

                  <p className="mt-3">
                    <strong>Check In:</strong>{" "}
                    {booking.checkIn}
                  </p>

                  <p>
                    <strong>Check Out:</strong>{" "}
                    {booking.checkOut}
                  </p>

                  <p className="mt-3 text-lg font-bold">
                    ₹{booking.total.toLocaleString()}
                  </p>

                  <button
                    onClick={() =>
                      handleDelete(booking.id)
                    }
                    className="mt-5 bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Bookings;
