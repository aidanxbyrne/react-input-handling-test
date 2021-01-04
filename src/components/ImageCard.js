import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = { spans: 0 };
    }

    setSpans = (e) => {
       const height = e.target.clientHeight;

       const spans = Math.ceil(height / 10 + 1);

       this.setState({ spans });
    }

    render(){
        const {alt_description, urls} = this.props.image;

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img 
                    src={urls.regular} 
                    alt={alt_description} 
                    onLoad={this.setSpans}
                    />
            </div>
        );
    };
}

export default ImageCard;