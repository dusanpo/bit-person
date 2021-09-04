import React from 'react'

export default function Search({search, query}) {

    const onSearch = (q)=>{
        //setText(q)
        console.log(q);
        search({query: q})
    }
    return (
        <div>
            <div className="row">
                <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input type="text" 
                        placeholder="Search..."
                        id="autocomplete-input" 
                        className="autocomplete"
                        autoFocus
                        onChange={(e)=>onSearch(e.target.value)}
                        value={query}
                        />
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

