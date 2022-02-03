import React from "react"
import { render } from "react-dom"
import {RiCake2Line} from "react-icons/ri"
import {GiDogBowl, GiJumpingDog, GiHeartPlus, GiDogHouse, GiSittingDog} from "react-icons/gi"
import {FaDog} from "react-icons/fa"
import { Link } from "react-router-dom"

class Matches extends React.Component {

    constructor(props) {
        super(props)
        this.filteredPups = []
    }

    componentDidMount() {
        window.scroll(0,0)
        this.props.fetchPups()
    }

    componentWillUnmount() {
        this.props.clearPreferences()
    }

    renderPupImgs(pup) {
        const rescueId = pup.orgId

        return (
            <div className="pup-matches-wrapper">
                <Link to={`/pups/${rescueId}/${pup.id}`}>
                    <div className="pup-matches-body">
                        <img src={pup.photoUrls[0]} className="pup-matches-img"/>
                        <div className="pup-matches-text">
                            <h1 className="pup-matches-name">{pup.pupName}</h1>
                        </div>
                    </div>
                </Link>          
            </div>
        )
    }

    renderMatches(pref, pups) {
        var responses = [pref.agePref, pref.sizePref, pref.genderPref]
        var filteredPups
        if (responses.every(response => response === 'No Preference')) {

            return pups.slice(10,14).map(pup => this.renderPupImgs(pup))
        } else if ( pref.agePref === 'No Preference' && (pref.sizePref !== 'No Preference' && pref.genderPref !== 'No Preference')) {
            filteredPups = pups.filter(pup => (pup.pupSize === pref.sizePref && pup.pupGender === pref.genderPref))

            return filteredPups.slice(0, 5).map(pup => this.renderPupImgs(pup))
        } else if ((pref.agePref === 'No Preference' && pref.sizePref === 'No Preference') && pref.genderPref !== 'No Preference') {
            filteredPups = pups.filter(pup => pup.pupGender === pref.genderPref)

            return filteredPups.slice(0, 5).map(pup => this.renderPupImgs(pup))
        } else if ((pref.agePref === 'No Preference' && pref.genderPref === 'No Preference') && pref.sizePref !== 'No Preference') {
            filteredPups = pups.filter(pup => pup.pupSize === pref.sizePref)

            return filteredPups.slice(0, 5).map(pup => this.renderPupImgs(pup))
        } else if ( pref.sizePref === 'No Preference' && (pref.agePref !== 'No Preference' && pref.genderPref !== 'No Preference')) {
            filteredPups = pups.filter(pup => (pup.pupAge === pref.agePref && pup.pupGender === pref.genderPref))

            return filteredPups.slice(0, 5).map(pup => this.renderPupImgs(pup)) 
        } else if ( pref.agePref !== 'No Preference' && (pref.sizePref === 'No Preference' && pref.genderPref === 'No Preference')) {
            filteredPups = pups.filter(pup => (pup.pupAge === pref.agePref))

            return filteredPups.slice(0, 5).map(pup => this.renderPupImgs(pup)) 
        } else if (pref.genderPref === 'No Preference' && (pref.sizePref !== 'No Preference' && pref.agePref !== 'No Preference')) {
            filteredPups = pups.filter(pup => (pup.pupAge === pref.agePref && pup.pupSize === pref.sizePref))

            return filteredPups.slice(0, 5).map(pup => this.renderPupImgs(pup)) 
        } else if (responses.every(response => response !== 'No Preference')) {
            filteredPups = pups.filter(pup => pup.pupAge === pref.agePref && pup.pupGender === pref.genderPref)

            return filteredPups.slice(0, 5).map(pup => this.renderPupImgs(pup)) 
        } else {

            return pups.slice(10,14).map(pup => this.renderPupImgs(pup))
        }
    }

    renderResults(pref, pups) {
        let results = this.renderMatches(pref, pups)
        if (results.length === 0) {
            return <h1 className="matches-error-message">Ruh-roh! No matches found. Please broaden your preferences.</h1>
        } else {
            return results
        }
    }


    render() {
    
        const {preferences, pups} = this.props
        if (!preferences || !pups) return null
        console.log("preferences, pups", preferences, pups)
        return (
            <div className="preference-form-outer-div">
                <div className="preference-form-inner-div">
                    <div className="matches-header">
                        <h1>Your Top Pup Picks!</h1>
                    </div>
                    <div className="matches-pref-div">
                        <h1 className="matches-header-2">Based on your preferences:</h1>
                        <div className="matches-pref-list">
                            <ul className="pref-container">
                                <li className="pref-div">
                                    <h1><RiCake2Line className="match-icon"/> </h1>
                                    <h2>Age</h2>
                                    <p>{preferences.agePref}</p>
                                </li>
                                <li className="pref-div">
                                    <h1><FaDog className="match-icon"/> </h1>
                                    <h2>Size</h2>
                                    <p>{preferences.sizePref}</p>
                                </li>
                                <li className="pref-div">
                                    <h1><GiDogBowl className="match-icon"/> </h1>
                                    <h2>Gender</h2>
                                    <p>{preferences.genderPref}</p>
                                </li>
                                <li className="pref-div">
                                    <h1><GiJumpingDog className="match-icon"/> </h1>
                                    <h2>Activity Level</h2>
                                    <p>{preferences.activityPref}</p>
                                </li>
                                <li className="pref-div">
                                    <h1><GiHeartPlus className="match-icon"/> </h1>
                                    <h2>Special Needs</h2>
                                    <p>{preferences.specialNeedsPref}</p>
                                </li>
                                <li className="pref-div">
                                    <h1><GiDogHouse className="match-icon"/> </h1>
                                    <h2>House-trained</h2>
                                    <p>{preferences.houseTrainedPref}</p>
                                </li>
                                <li className="pref-div">
                                    <h1><GiSittingDog className="match-icon"/> </h1>
                                    <h2>Good with Other Pups</h2>
                                    <p>{preferences.goodWithDogsPref}</p>
                                </li>
                            </ul>
                        </div>  
                    </div>
                    <div className="pup-matches-header-div">
                        <h1 className="pup-matches-header">Top Pup Matches</h1>
                    </div>
                    <div className="pup-matches-div">
                        {this.renderResults(preferences, pups)}
                    </div>
                    <Link className="pups-index-button" to="/pups/index">MORE PUPS</Link>
                </div>
            </div>
        )
    }
}

export default Matches