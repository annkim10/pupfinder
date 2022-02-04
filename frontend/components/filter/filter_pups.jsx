import React from "react";
import { IoIosArrowDown } from "react-icons/io"
import {FaDog} from "react-icons/fa"

class FilterPups extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showOptions: false,
            filter: ""
        }
        this.age = ['Puppy', 'Adult', 'Senior']
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.renderArrow = this.renderArrow.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.filterPups(this.state.filter)
    }

    handleChange(e) {
        // e.stopPropagation()
        this.setState({filter: e.target.innerText, showOptions: false})
    }

    handleDropdown() {
         if (this.state.showOptions) {
            return (
                <div className="filter-dropdown-options-container-active">
                    <div className="filter-dropdown-options-wrapper">
                        {this.age.map((pref, idx) => {
                            return (
                            <div key={idx} className="filter-dropdown-options" onClick={(e) => {
                                // e.stopPropagation()
                                this.handleChange(e)
                            }}>
                                <input type="radio" className="radio-button" name="age-filter" value={pref} />
                                <label htmlFor="age-filter">{pref}</label>
                            </div>
                            )
                        })}
                    </div>      
                </div>
            )
        } else {
            return null
        }
    }

    renderArrow() {
        if (this.state.showOptions) {
            console.log(this.state)
            return <IoIosArrowDown className="filter-arrow-icon-up" />
                // e.preventDefault()
                // return this.setState({showOptions: false}, console.log(this.state))
        } else {
           console.log(this.state)
           return <IoIosArrowDown className="filter-arrow-icon-down"/>
        }
    }

    render() {
  
        return (
            <form onSubmit={this.handleSubmit} >
                 <div className="filter-dropdown-box">
                    <div className="selected-filter" onClick={(e) => {
                        // e.stopPropagation()
                        this.setState({showOptions: true})
                    }}>
                       { this.state.filter ? this.state.filter : 'Any age' }
                      {/* <IoIosArrowDown className="filter-arrow-icon"/> */}
                      {this.renderArrow()}
                    </div>
                    {this.handleDropdown()}
                    <button className="filters-button">Apply Filters</button>
                </div>
            </form>
        )
    }
}


export default FilterPups