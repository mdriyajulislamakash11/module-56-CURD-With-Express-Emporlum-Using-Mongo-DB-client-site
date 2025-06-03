import React from "react";

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="flex justify-between">
        <div>
          <figure className="">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl w-52 h-36"
            />
          </figure>
        </div>

        <div className="card-body  items-center text-center">
          <div className="flex justify-between w-full gap-10">
            <div>
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
