import React from "react";
import img from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import meet from "../../assets/meet.jpg"
import { Link } from "react-router-dom"
import PupPicks from "../pup/pup_picks";

class Home extends React.Component {

    constructor(props) {
        super(props)
    
    }

    componentDidMount() {
        this.props.fetchPups()  
        this.props.fetchRescues()
    }

    render() {

        const {pups, postFavorite, currentUser} = this.props

        const keys = Object.keys(pups)
        const random = []

        for (let i = 0; i < 5; i++) {
            let randomNum = Math.floor(Math.random() * 25) + 1
            if (!random.includes(randomNum)) random.push(randomNum)
        }

        var pupPicks = []

        random.forEach(r => pupPicks.push(pups[r]))

        console.log("home", pupPicks)


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
                    <div className="pup-picks-header">
                        <Link className="pup-picks-link" to="/pups/index">Find Adoptable Pups</Link>
                    </div>
                    <div className='pup-picks-div'>
                         {pupPicks.map((pup, idx) => <PupPicks key={idx} postFavorite={postFavorite} pup={pup} currentUser={currentUser}/>)}
                    </div>
                </div>    
                <div className="meet-greet-home-div">
                    <div className="meet-greet-copy-div">
                        {/* <img className="meet-greet-form-img" src={meet} /> */}
                        <div className="meet-greet-text-div">
                            <h1>Are you a match? </h1>
                            <p>Schedule a Meet &amp; Greet with a pup</p>
                        </div>
                    </div>       
                    <img className="meet-greet-img" src={img2} />
                </div>
                 <div className="articles-home-div">
                    <div className="articles-home-wrapper">
                        
                    </div>
                </div>   
            </div>
        </div>
        )}

}

export default Home