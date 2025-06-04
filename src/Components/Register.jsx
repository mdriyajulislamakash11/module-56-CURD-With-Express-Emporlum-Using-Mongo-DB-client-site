import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = { name, email, createdAt };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "User Create Successfully!",
                icon: "success",
                draggable: true,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6  rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          placeat, doloribus!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="name"
              name="name"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">password</label>
            <input
              type="password"
              name="password"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
