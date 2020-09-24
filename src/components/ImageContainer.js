import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const ImageContainer = props => {
    const results = props.data;
    let photos;
  
    // display results when using search function, otherwise display result no found message.
    if(results.length > 0) {
      photos = results.map(photo => 
        <Photo 
        key = {photo.id} 
        farm = {photo.farm} 
        server = {photo.server} 
        secret = {photo.secret} 
        title={photo.title} 
        photoId= {photo.id} 
        />);
    } else {
      photos = <NotFound />
    }
    
  
    return(
      <div className="photo-container">
      <h2>Results</h2>
        <ul>
          {photos}
        </ul>
    </div>               
    );
  }

export default ImageContainer;