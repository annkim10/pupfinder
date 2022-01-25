import React from "react";
import img from "../../assets/img1.jpg"
import { Link } from "react-router-dom"

class Home extends React.Component {

    constructor(props) {
        super(props)
    
    }

    componentDidMount() {
        this.props.fetchPups()  
    }

    render() {
        return (
        <div className="home-wrapper">
            <div className="main-div">
                <div className="inner-home-div">
                    {/* <h2>Find your perfect pup</h2> */}
                    <img className="hero-img" src={img} />
                </div>
                <div className="articles-home-div">
                    <Link to="/pups">Pups Index</Link>
                </div>    
            </div>
        </div>
        )}

}

export default Home