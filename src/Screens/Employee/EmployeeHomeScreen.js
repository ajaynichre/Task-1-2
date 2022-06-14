import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
const EmployeeHomeScreen = (props) => {
  const userSignIn = useSelector((store) => store.userSignIn);
  return (
    <div className="Screen">
      {!userSignIn.response && <Header title="You are not logged in" />}
      {userSignIn.response && (
        <Header title={"Welcome " + userSignIn.response.data.firstName} />
      )}
      <img
       src={`Images` + `/carousel5.jpg`}
       height="500px"
       width="1100px"
       />
    </div>
  );
};

export default EmployeeHomeScreen;
