import React, { Fragment, useEffect } from "react";
// import MetaData from "../layout/MetaData";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const handler = () => {
    history.push("/");
  }

  // useEffect(() => {
  //       if(isAuthenticated===false)
  //       {
  //           // history.push("/")
  //           handler();
  //       }
  // }, [isAuthenticated , history ]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {
            isAuthenticated && user && (
                  <div className="profileContainer">
                <div>
                  <h1>My Profile</h1>
                  <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                  <Link to="/update/profile">Edit Profile</Link>
                </div>
                <div>
                  <div>
                    <h4>Name</h4>
                    <p>{user?.name}</p>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>{user?.email}</p>
                  </div>
                  <div>
                    <h4>User Role</h4>
                    <p>{user?.role === "admin" ? "Teacher" : "Student"}</p>
                  </div>
                  <div>
                    <h4>Joined On</h4>
                    <p>{(user?.createdAt).substr(0,10)}</p>
                  </div>
                </div>
              </div>
            )
          }
          
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
