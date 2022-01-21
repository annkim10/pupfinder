import React from "react";
import HomeCarousel from "./carousel";
import img from "../../assets/carousel1.png"
import logo from "../../assets/pupfinder_logo.png"

class Home extends React.Component {

    render() {
        return (
        <div className="home-wrapper">
            {/* <h2>Find your perfect pup</h2> */}
            <div className="carousel-wrapper">
                <img className="carousel" src={img} />
                 {/* <HomeCarousel /> */}
            </div>
           
        </div>
        )}

}

export default Home