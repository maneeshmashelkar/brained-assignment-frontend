import React from "react";

const UserForm = ({
  handleChange,
  onSubmit,
  age,
  name,
  education,
  submitName,
}) => {
  return (
    <div>
      <form className="row g-1">
        <div className="form-group">
          <div className="mb-2 row">
            <label htmlFor="photo" className="col-sm-2 col-form-label">
              Photo:
            </label>
            <div className="col-sm-6">
              <input
                onChange={handleChange("photo")}
                type="file"
                id="photo"
                className="form-control"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </div>
          </div>

          <div className="mb-2 row">
            <label htmlFor="photo" className="col-md-2 col-form-label">
              Name:
            </label>
            <div className="col-sm-6">
              <input
                onChange={handleChange("name")}
                name="name"
                id="name"
                className="form-control"
                placeholder="Name"
                value={name}
              />
            </div>
          </div>
          <div className="mb-2 row">
            <label htmlFor="photo" className="col-md-2 col-form-label">
              Age:
            </label>
            <div className="col-sm-6">
              <input
                onChange={handleChange("age")}
                type="number"
                max={99}
                id="age"
                min={5}
                name="age"
                className="form-control"
                placeholder="Age"
                value={age}
              />
            </div>
          </div>
          <div className=" mb-2 row">
            <label htmlFor="education" className="col-md-2 col-form-label">
              Education:
            </label>
            <div className="col-sm-6">
              <input
                onChange={handleChange("education")}
                name="education"
                id="education"
                className="form-control"
                placeholder="Education"
                value={education}
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success mb-4 col-3 rounded"
          >
            {submitName}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
