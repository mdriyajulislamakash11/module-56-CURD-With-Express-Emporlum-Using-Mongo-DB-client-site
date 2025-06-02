const AddCoffee = () => {
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

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
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
