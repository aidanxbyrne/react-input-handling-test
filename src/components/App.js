import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state = { images: [] };
    
    onSearchSubmit = async (searchInput) => {
        const response = await unsplash.get('/search/photos/', {
            params: { query: searchInput },
        });

        this.setState({ images: response.data.results });
    }

    render(){
        return(
            <div className="ui container mt" style={{margin: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;