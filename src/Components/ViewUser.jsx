import React, { useEffect, useState } from "react";
import { API } from "../backend";
import PhotoHelper from "../helper/PhotoHelper";

const ViewUser = ({ refresh, setRefresh, setUserUpdateId }) => {
  const [users, setUsers] = useState([]);

  // const reload = () => {
  //   window.
  // }

  const preload = () => {
    fetch(`${API}/users`, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    preload();
  }, [refresh]);

  const deleteThisuser = (userId) => {
    fetch(`${API}/delete/${userId}`, {
      method: "DELETE",
      Accept: "application/json",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        preload();
      })
      .catch((error) => console.log(error));
  };

  const UpdateThisuser = (userId) => {
    setUserUpdateId(userId);
  };

  return (
    <div>
      <div>
        <h4 className="mb-2">
          All users: <span>({users.length})</span>
        </h4>
      </div>
      <div className="row rounded">
        <table className="table table-sm table-hover ">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Education</th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index} className="align-middle">
                  <td>
                    <PhotoHelper user={user} />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.education}</td>
                  <td className="text-center">
                    <div className="row ">
                      <div className="col-6">
                        <button
                          onClick={() => {
                            UpdateThisuser(user._id);
                          }}
                          className="btn btn-sm btn-success rounded"
                        >
                          Update
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          onClick={() => {
                            deleteThisuser(user._id);
                          }}
                          className="btn btn-sm btn-danger rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUser;
