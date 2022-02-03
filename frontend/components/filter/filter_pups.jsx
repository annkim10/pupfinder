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
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.filterPups(this.state.filter)
    }

    handleChange(e) {
        this.setState({filter: e.target.innerText, showOptions: false})
    }

    handleDropdown() {
         if (this.state.showOptions) {
            return (
                <div className="filter-dropdown-options-container-active">
                    <div className="filter-dropdown-options-wrapper">
                        {this.age.map((pref, idx) => {
                            return (
                            <div className="filter-dropdown-options" onClick={(e) => this.handleChange(e)}>
                                <input type="radio" className="radio-button" name="age-filter" key={idx} value={pref} />
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

    render() {
        console.log(this.state.filter)
        return (
            <form onSubmit={this.handleSubmit} >
                 <div className="filter-dropdown-box">
                    <div className="selected-filter" onClick={() => this.setState({showOptions: true})}>
                       { this.state.filter ? this.state.filter : 'Any age' }
                        <IoIosArrowDown className="filter-arrow-icon"/>
                    </div>
                    {this.handleDropdown()}
                    <button className="filters-button">Apply Filters</button>
                </div>
            </form>
        )
    }
}


export default FilterPups