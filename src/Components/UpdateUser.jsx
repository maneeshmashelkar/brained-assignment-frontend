import React, { useState } from "react";
import { useCallback } from "react";
// import { useCallback } from "react";
import { useEffect } from "react";
import { API } from "../backend";
import UserForm from "./UserForm";

const UpdateUser = ({ refresh, setUserUpdateId, setRefresh, userUpdateId }) => {
  const [values, setValues] = useState({
    name: "",
    age: "",
    education: "",
    formData: new FormData(),
  });

  const { name, age, education, formData } = values;

  const loadData = useCallback((userUpdateId) => {
    fetch(`${API}/user/${userUpdateId}`, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setValues((values) => ({
          ...values,
          name: data.name,
          age: data.age,
          education: data.education,
          formData: new FormData(),
        }));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    loadData(userUpdateId);
  }, [loadData, userUpdateId]);

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

    fetch(`${API}/update/${userUpdateId}`, {
      method: "PUT",
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
        });
        setUserUpdateId("");
        setRefresh((refresh) => !refresh);
      })
      .catch((error) => console.log(error));
  };

  return (
    <UserForm
      handleChange={handleChange}
      age={age}
      name={name}
      education={education}
      onSubmit={onSubmit}
      submitName="Update User"
    />
  );
};

export default UpdateUser;
