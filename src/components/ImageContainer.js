import React from 'react';
import Image from './Image.js';
import NotFound from './NotFound.js';

const ImageContainer = (props) => {
    const results = props.data;
    const loading = props.loading;
    let images;
  
    // If there are search results display them, otherwise display a Not Found message
    if (results.length) {
      images = results.map(image => 
        <Image 
          url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
          alt={image.title} 
          key={image.id} 
        />
      );
    } else {
      images = <NotFound />
    }
  
    return(
      <div className="photo-container">
        <h2>Images For: {props.text}</h2>
        <ul>
          {
            (loading) ? <p>Loading...</p> : images
          }
        </ul>
      </div>
    );
  }

export default ImageContainer;