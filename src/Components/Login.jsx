import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);


        const lastLoginTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = {email, lastLoginTime}

        fetch(`http://localhost:5000/users/${email}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6  rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          placeat, doloribus!
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
