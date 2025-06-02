import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const chef = form.chef.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, supplier, taste, chef, category, details, photo };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added Successfully",
            text: "That thing is still around",
            icon: "success",
          });
        }
        console.log(data);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-base-100 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Add New Coffee</h2>
          <p className="text-gray-600 mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
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
              placeholder="Enter chef name"
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
              placeholder="Enter supplier name"
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
              placeholder="Enter taste"
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
              placeholder="Enter category"
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
              placeholder="Enter details"
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
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control md:col-span-2">
            <button className="btn btn-primary w-full">Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
