import React from "react";
import img from "../../assets/img1.jpg"
import { Link } from "react-router-dom"

class Home extends React.Component {

    constructor(props) {
        super(props)
    
    }

    componentDidMount() {
        this.props.fetchPups()  
        this.props.fetchRescues()
    }

    render() {
        return (
        <div className="home-wrapper">
            <div className="main-div">
                <div className="inner-home-div">
                    <div className="pup-home-div">
                       <h1>Find your perfect pup</h1>
                    </div>
                    <img className="hero-img" src={img} />
                </div>
                <div className="pup-picks-home-div">
                    <Link to="/pups/index">Find Adoptable Pups</Link>
                    
                </div>    
                 <div className="articles-home-div">
                    <Link to="/pups/index">Pups Index</Link>
                </div>   
            </div>
        </div>
        )}

}

export default Home