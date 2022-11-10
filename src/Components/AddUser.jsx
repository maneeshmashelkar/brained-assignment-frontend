import React, { useState } from "react";
import { API } from "../backend";
import UserForm from "./UserForm";

const AddUser = ({ refresh, setRefresh }) => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    education: "",
    formData: new FormData(),
  });

  const { name, age, education, formData } = values;

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (name === "" || age === "" || age > 99 || age < 5 || education === "") {
      return;
    }

    fetch(`${API}/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setValues({
          name: "",
          age: "",
          education: "",
          formData: new FormData(),
        });
        setRefresh((refresh) => !refresh);
      })
      .catch((error) => console.log(error));
  };

  // const createUserForm = () => (
  //   <div>
  //     <form className="row g-1">
  //       <div className="form-group">
  //         <div className="mb-2 row">
  //           <label htmlFor="photo" className="col-sm-2 col-form-label">
  //             Photo:
  //           </label>
  //           <div className="col-sm-6">
  //             <input
  //               onChange={handleChange("photo")}
  //               type="file"
  //               id="photo"
  //               className="form-control"
  //               name="photo"
  //               accept="image"
  //               placeholder="choose a file"
  //             />
  //           </div>
  //         </div>

  //         <div className="mb-2 row">
  //           <label htmlFor="photo" className="col-md-2 col-form-label">
  //             Name:
  //           </label>
  //           <div className="col-sm-6">
  //             <input
  //               onChange={handleChange("name")}
  //               name="name"
  //               id="name"
  //               className="form-control"
  //               placeholder="Name"
  //               value={name}
  //             />
  //           </div>
  //         </div>
  //         <div className="mb-2 row">
  //           <label htmlFor="photo" className="col-md-2 col-form-label">
  //             Age:
  //           </label>
  //           <div className="col-sm-6">
  //             <input
  //               onChange={handleChange("age")}
  //               type="number"
  //               max={99}
  //               id="age"
  //               min={5}
  //               name="age"
  //               className="form-control"
  //               placeholder="Age"
  //               value={age}
  //             />
  //           </div>
  //         </div>
  //         <div className=" mb-2 row">
  //           <label htmlFor="education" className="col-md-2 col-form-label">
  //             Education:
  //           </label>
  //           <div className="col-sm-6">
  //             <input
  //               onChange={handleChange("education")}
  //               name="education"
  //               id="education"
  //               className="form-control"
  //               placeholder="Education"
  //               value={education}
  //             />
  //           </div>
  //         </div>

  //         <button
  //           type="submit"
  //           onClick={onSubmit}
  //           className="btn btn-outline-success mb-4 col-2 rounded"
  //         >
  //           submit
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <UserForm
      handleChange={handleChange}
      age={age}
      name={name}
      education={education}
      onSubmit={onSubmit}
      submitName="create User"
    />
    // <div className="col-6">
    //   <UserForm
    //     handleChange={handleChange}
    //     age={age}
    //     name={name}
    //     education={education}
    //     onSubmit={onSubmit}
    //     submitName="Update User"
    //   />
    // </div>
  );
};

export default AddUser;
