import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, photo, details, category, chef, taste, supplier } = coffee || {};
  console.log(name)

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="flex justify-between">
        <div>
          <figure>
            <img
              src={photo}
              alt={name}
              className="rounded-xl w-52 h-36"
            />
          </figure>
        </div>

        <div className="card-body items-center text-center">
          <div className="flex justify-between w-full gap-10">
            <div className="text-left space-y-1">
              <h2 className="card-title">{name}</h2>
              <p><span className="font-semibold">Chef:</span> {chef}</p>
              <p><span className="font-semibold">Supplier:</span> {supplier}</p>
              <p><span className="font-semibold">Taste:</span> {taste}</p>
              <p><span className="font-semibold">Category:</span> {category}</p>
              <p><span className="font-semibold">Details:</span> {details}</p>
            </div>

            <div className="card-actions">
              <div className="join join-vertical">
                <button className="btn join-item btn-sm">View</button>
                <button className="btn join-item btn-sm">Edit</button>
                <button className="btn join-item btn-sm">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
