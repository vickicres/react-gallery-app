import React from 'react';

const Photo = ({ farm, server, secret, photoId, title }) => (
    <li>
        <img src={`https://farm${farm}.staticflickr.com/${server}/${photoId}_${secret}.jpg`} alt= {`${title}`}/>
        
  </li>    
);

export default Photo;