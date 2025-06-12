import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelet = (_id) => {
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
        fetch(`https://server-mu-ten-68.vercel.app/${_id}`, {
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
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Time Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr key={user._id} className="bg-base-200">
              <th>1</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.lastLoginTime}</td>
              <td>
                {/* <button className="btn btn-secondary px-6 mx-4">V</button> */}
                <Link to={`/updatedUser/${user._id}`}>
                  <button className="btn btn-primary px-6 mx-4">E</button>
                </Link>
                <button
                  onClick={() => handleDelet(user?._id)}
                  className="btn px-6 btn-warning"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
