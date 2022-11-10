import React from "react";
import { useState } from "react";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import ViewUser from "./Components/ViewUser";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [userUpdateId, setUserUpdateId] = useState("");

  return (
    <div className="App container mt-5">
      <h1 style={{ padding: "20px", textAlign: "center" }}>User Data</h1>
      <div className="container row">
        <div className="col-6">
          <AddUser refresh={refresh} setRefresh={setRefresh} />
        </div>
        {userUpdateId ? (
          <div className="col-6">
            <UpdateUser
              userUpdateId={userUpdateId}
              refresh={refresh}
              setRefresh={setRefresh}
              setUserUpdateId={setUserUpdateId}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <ViewUser
        refresh={refresh}
        setUserUpdateId={setUserUpdateId}
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default App;
