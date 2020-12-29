import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component{
    
    onSearchSubmit(searchInput){
        console.log(searchInput);
    }

    render(){
        return(
            <div className="ui container mt" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;