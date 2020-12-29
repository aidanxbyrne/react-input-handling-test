import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <div className="ui segment">
                <from className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" />
                    </div>
                </from>
            </div>
        )
    }
}

export default SearchBar