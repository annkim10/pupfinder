import React from "react"
import {Link, useHistory} from "react-router-dom"
import {FaAngleRight, FaAngleLeft, FaMapMarkerAlt, FaRegEnvelopeOpen, FaPhoneAlt, FaLaptop, FaHeart} from "react-icons/fa"
import {BiCalendarHeart} from "react-icons/bi"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { postFavorite } from "../../utils/fav_api_util"

class PupShow extends React.Component {
    constructor(props) {
        super(props)
        console.log("construct", this.props)
        this.state = {
            current: 0,
            length: this.props.pup.photoUrls.length,
            favorite: {
                 pup_id: this.props.pup.id,
                 user_id: this.props.currentUser.id
            },
            favorited: false
        }
        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.fetchRescue(this.props.pup.orgId)
    }

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

    renderFavoriteButton(favPups, pup) {

        if (!favPups.includes(pup.id) && !this.state.favorited) {
            return (
                 <button className={"fav-button"} 
                    onClick={() => (postFavorite(this.state.favorite), this.setState( { favorited: true }) )}>
                    <span><FaHeart className="heart-icon"/></span>
                    FAVORITE</button>
            )
        } else {
            return (
                 <button className={"inactive-fav-button"}>
                    <span><FaHeart className="heart-icon"/></span>
                    FAVORITE</button>
            )
        }
    }

    render() {
        // console.log("inside pupshow", this.props)
        const {pup, rescue, user, favorites, postFavorite} = this.props
        if (!pup || !rescue || !user) return null

        var favPups = Object.values(favorites)
        favPups = favPups.map(pup => pup.pupId)

      
        return (
            <div className="pup-show-div">
                <div className="pup-show-main-wrapper">
                    <Link className="pupshow-to-index-button" to="/pups/index"> <MdOutlineKeyboardBackspace /> Back to Pups</Link>
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
                                    <img className="user-thumbnail" src={user.photoUrls[0]} />
                                </div>
                            </div>
                            <h1 className="meet-header">Interested in adopting 
                                <span> {pup.pupName}</span>?
                            </h1>
                            <div className="meet-buttons">
                                <Link className="meet-button" 
                                    to={`/users/${user.id}/${pup.id}/${rescue.id}/meet`}>
                                    MEET &amp; GREET</Link>
                                {this.renderFavoriteButton(favPups, pup)}
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

export default PupShow