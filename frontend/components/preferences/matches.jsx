import React from "react"
import { render } from "react-dom"
import {RiCake2Line} from "react-icons/ri"
import {GiDogBowl, GiJumpingDog, GiHeartPlus, GiDogHouse, GiSittingDog} from "react-icons/gi"
import {FaDog} from "react-icons/fa"

class Matches extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPups()
    }

    render() {
        console.log('inside matches', this.props)
    
        const {preferences} = this.props
        if (!preferences) return null
        
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
                </div>
            </div>
        )
    }
}

export default Matches