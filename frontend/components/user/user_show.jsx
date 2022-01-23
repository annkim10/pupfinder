import React from "react";
import pic from "../../assets/profile-pic.jpg"


class UserShow extends React.Component {

    render() {
        return (
            <div className="user-show-outer-div">
                <div className="user-show-inner-div">
                    <div className="user-profile">
                        <div className="user-about">
                            <h1>My Pupfinder</h1>
                            <img className="profile-pic" src={pic} />
                            <p>Tyler Rath</p>
                            <p>Zipcode 11101</p>
                            <div className="user-links">
                                <h1>Adopter Profile</h1>
                                <br/>
                                <h1>Liked Pups</h1>
                            </div>
                        </div>
                        <div className="user-info">
                            <h1>Adopter profile</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow