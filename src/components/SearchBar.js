import React from 'react';

class SearchBar extends React.Component{
    
    state = {inputValue: ''};

    onInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSearchSubmit(this.state.inputValue);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            onChange={this.onInputChange} 
                            value={this.state.inputValue} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar