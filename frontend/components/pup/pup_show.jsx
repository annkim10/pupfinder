import React from "react"
import {Link, withRouter} from "react-router-dom"
import {FaAngleRight, FaAngleLeft, FaMapMarkerAlt, FaRegEnvelopeOpen, FaPhoneAlt, FaLaptop, FaHeart} from "react-icons/fa"
import {BiCalendarHeart} from "react-icons/bi"
import pic from "../../assets/profile-pic.jpg"

class PupShow extends React.Component {
    constructor(props) {
        super(props)
        // console.log("construct", this.props)
        this.state = {
            current: 0,
            length: this.props.pup.photoUrls.length
        }
        // this.length = this.props.pup.photoUrls.length
        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)
    }

    // componentDidMount() {
    //     this.props.fetchRescue(this.props.pup.orgId)
    // }

    nextSlide() {
        this.setState((prevState) => {
            return this.state.current === this.state.length-1 ? {current: 0} : {current: prevState.current + 1}
        })
    }

    prevSlide() {
        this.setState((prevState) => {
            return this.state.current === 0 ? {length: prevState.length-1} : {current: prevState.current - 1}
        })
    }

    render() {
        // console.log("inside pupshow", this.props)
        const {pup, rescue} = this.props
        
        // console.log("inside pupshow", rescue)
        // console.log("state", this.state)
        
        return (
            <div className="pup-show-div">
                <div className="pup-show-top-links-wrapper">
                    {/* <div className="pup-show-top-links">             
                        <p>Pup Search</p> 
                        <p>Next Pup</p>
                    </div> */}
                </div>
                <div className="pup-show-main-wrapper">
                    <div className="pup-show-header">
                        <h1>Meet {pup.pupName} </h1>
                    </div>
                    <section className="pup-show-profile-div">
                        <div className="pup-show-img-div">
                            <FaAngleLeft className="left-arrow" onClick={this.prevSlide}/>
                            <FaAngleRight className="right-arrow" onClick={this.nextSlide}/>
                            {pup.photoUrls.map((url, idx) => {
                                return (
                                    <div className={idx === this.state.current ? 'slide-active' : 'slide'} key={idx}>
                                        {idx === this.state.current && (<img className="pup-show-img" src={url}/>)}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="pup-show-about-div">
                            <div className="pup-show-about">
                                <h1 className="pup-show-about-header">About</h1>
                                <h2 className="pup-show-about-subheader">BREED</h2>
                                    <p>{pup.pupBreed}</p>
                                <h2 className="pup-show-about-subheader">SIZE</h2>
                                    <p>{pup.pupSize}</p>
                                <h2 className="pup-show-about-subheader">AGE</h2>
                                    <p>{pup.pupAge}</p>
                                <h2 className="pup-show-about-subheader">GENDER</h2>
                                    <p>{pup.pupGender}</p>
                                <h2 className="pup-show-about-subheader">BIO</h2>
                                    <p>{pup.pupBio}</p>
                            </div>
                        </div>
                        <div className="rescue-meet-div">
                            <div className="thumbnails">
                                <div className="pup-thumbnail-div">
                                    <img className="pup-thumbnail" src={pup.photoUrls[0]} />
                                </div>
                                <BiCalendarHeart className="heart-icon-thumbnail"/>
                                <div className="user-thumbnail-div">
                                    <img className="user-thumbnail" src={pic} />
                                </div>
                            </div>
                            <h1 className="meet-header">Interested in adopting 
                                <span> {pup.pupName}</span>?
                            </h1>
                            <div className="meet-buttons">
                                <button className="meet-button">MEET &amp; GREET</button>
                                <button className="fav-button"><span><FaHeart className="heart-icon"/></span>FAVORITE</button>
                            </div>
                        </div>
                    </section>
                    
                </div>
                <div className="pup-show-rescue-wrapper">
                    <div className="pup-show-rescue-main">
                        <div className="rescue-logo-div">
                            <img className="rescue-logo" src={rescue.photoUrl} alt="rescue-logo"/>
                        </div>
                        <div className="rescue-about-div">
                            <h1 className="rescue-name">{rescue.orgName}</h1>
                            <div className="rescue-info-div">
                                <div className="rescue-address-div">
                                    <FaMapMarkerAlt className="map-icon"/>
                                    <p className="rescue-address">
                                        {rescue.orgAddress}
                                    </p>
                                </div>
                                <div className="rescue-email-div">
                                    <FaRegEnvelopeOpen className="email-icon"/>
                                    <p className="rescue-email">
                                        {rescue.orgEmail}
                                    </p>
                                </div>
                                <div className="rescue-phone-div">
                                    <FaPhoneAlt className="phone-icon"/>
                                    <p className="rescue-phone">
                                        {rescue.orgPhone}
                                    </p>
                                </div>
                                <div className="rescue-website-div">
                                    <FaLaptop className="website-icon"/>
                                    <p className="rescue-website">
                                        {rescue.orgWebsite}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PupShow)