import React from "react"
import {Link, withRouter} from "react-router-dom"
import {FaAngleRight, FaAngleLeft} from "react-icons/fa"


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
        const {pup} = this.props
        // console.log("inside pupshow", this.props.pup.pupName)
        // console.log("state", this.state)
        
        return (
            <div className="pup-show-div">
                <div className="pup-show-top-links-wrapper">
                    <div className="pup-show-top-links">             
                        <p>Pup Search</p> 
                        <p>Next Pup</p>
                    </div>
                </div>
                <div className="pup-show-main-wrapper">
                    <div className="pup-show-header">
                        <h1>Meet {pup.pupName} </h1>
                    </div>
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
                </div>
            </div>
        )
    }
}

export default withRouter(PupShow)