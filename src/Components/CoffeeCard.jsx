import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, details, category, chef, taste, supplier } =
    coffee || {};



  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
  
            const remining = coffees.filter((cof) => cof?._id !== _id);
            setCoffees(remining);
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-md p-4 w-full h-[260px]">
      <div className="flex flex-row items-center gap-4 h-full">
        {/* Image Section */}
        <figure className="w-40 h-40 flex-shrink-0">
          <img
            src={photo}
            alt={name}
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>

        {/* Content Section */}
        <div className="flex-1 text-left space-y-1 overflow-hidden">
          <h2 className="text-xl font-bold truncate">{name}</h2>
          <p className="text-sm">
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-sm truncate">
            <span className="font-semibold">Details:</span> {details}
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col justify-center gap-2">
          <button className="btn btn-sm btn-outline">View</button>

          <Link to={`updateCoffee/${_id}`}>
            <button className="btn btn-sm btn-outline">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-outline btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
