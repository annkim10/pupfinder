import React from "react";
import img from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import { Link } from "react-router-dom"
import PupPicks from "../pup/pup_picks";
import { BsArrowRightShort } from "react-icons/bs"

import Articles from "./articles";


class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPups()  
        this.props.fetchRescues()

        if (this.props.currentUser) {
             this.props.fetchFavorites(this.props.currentUser.id)
        }
    }

    renderIndexLink() {
        if (!this.props.currentUser) {
            return <button className="pup-picks-link" onClick={() => this.props.openModal('login')}>Find Adoptable Pups</button>
        } else {
            return <Link className="pup-picks-link" to="/pups/index">Find Adoptable Pups</Link>
        }
    }

    renderMatchesLink() {
          if (!this.props.currentUser) {
            return <button className="home-quiz-button-notlogin" onClick={() => this.props.openModal('login')}>Get Started</button>
        } else {
            return <Link className="home-quiz-button" to={`/users/preferences`}>Get Started</Link>
        }
    }

    render() {

        const {pups, postFavorite, currentUser} = this.props

        return (
        <div className="home-wrapper">
            <div className="main-div">
                <div className="inner-home-div">
                    <div className="pup-home-div">
                        <div className="pup-home-div-header">
                            <h1>Find your perfect pup</h1>
                            <h2>Get personalized matches</h2>
                        </div>
                        {this.renderMatchesLink()}
                        {/* <Link className="home-quiz-button" to={`/users/preferences`}>Get Started</Link> */}
                    </div>
                    <img className="hero-img" src={img} />
                </div>
                <div className="pup-picks-home-div">
                    <div className="pup-picks-header">
                        {this.renderIndexLink()}
                    </div>
                    <div className='pup-picks-div' onClick={() => this.props.openModal('login')}>
                         {this.props.pupsArr.map((pup, idx) => <PupPicks key={idx} postFavorite={postFavorite} pup={pup} currentUser={currentUser}/>)}
                    </div>
                </div>    
                <div className="meet-greet-home-div">
                    <div className="meet-greet-copy-div">
                        <div className="meet-greet-text-div">
                            <h1>Are you a match? </h1>
                            <p>Schedule a Meet &amp; Greet with a pup</p>
                        </div>
                    </div>       
                    <img className="meet-greet-img" src={img2} />
                </div>
                 <div className="articles-home-div">
                    <div className="articles-home-wrapper">
                        <h1>Caring for Your Pup</h1>
                        <Articles />
                    </div>
                </div>   
            </div>
        </div>
        )}

}

export default Home