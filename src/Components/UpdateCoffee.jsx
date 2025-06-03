import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee)
  const { _id, name, supplier, taste, chef, category, details, photo } = coffee;

  const handleUpdateForm = (event) => {
    event.preventDefault();


 const form = event.target;

    const name = form.name.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const chef = form.chef.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {_id, name, supplier, taste, chef, category, details, photo };
    console.log(updatedCoffee);


    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-base-100 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Update A Coffee</h2>
          <p className="text-gray-600 mt-2">
            Update your coffee details using this form.
          </p>
        </div>

        <form
          onSubmit={handleUpdateForm}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control md:col-span-2">
            <button className="btn btn-primary w-full">Update Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
