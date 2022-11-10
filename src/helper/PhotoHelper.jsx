import React from "react";
import { API } from "../backend";

const PhotoHelper = ({ user }) => {
  const photo = user
    ? `${API}/photo/${user._id}`
    : "https://bitsofco.de/content/images/2018/12/broken-1.png";

  return (
    <div className="rounded">
      <img
        src={`${photo}?time=${new Date().getTime()}`}
        alt="userPhoto"
        style={{ maxHeight: "100px", maxWidth: "100px" }}
        className="img-fluid img-thumbnail"
      />
    </div>
  );
};

export default PhotoHelper;
