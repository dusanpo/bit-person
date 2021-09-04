import React from 'react'

export default function Search() {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input type="text" id="autocomplete-input" className="autocomplete"/>
                        <label for="autocomplete-input">Search...</label>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

