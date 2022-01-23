import React from "react";
import img from "../../assets/img1.jpg"


class Home extends React.Component {

    render() {
        return (
        <div className="home-wrapper">
            <div className="main-div">
                <div className="inner-home-div">
                    {/* <h2>Find your perfect pup</h2> */}
                    <img className="hero-img" src={img} />
                </div>
                <div className="articles-home-div">
                    <p>Learn more</p>
                </div>    
            </div>
        </div>
        )}

}

export default Home