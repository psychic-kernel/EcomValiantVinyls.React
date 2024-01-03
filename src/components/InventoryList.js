import { useState, useEffect } from 'react'; 


/**
 * artist
 * album
 * genre
 * release_date
 * label
 * price
 * tracklist
 * cover_image
 */
const InventoryList = ({records}) => {

  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          
          {records.map(rec => (
            <div key={rec.record_id} style={{display: "flex"}} className="row">
              <img
                src={rec.cover_image} alt="album artwork/covers"
                style={{
                  height: 300,
                  width: 300,
                  marginTop: 20
                }}
              />
              <span className="row">
                <b className="text-info">Artist:</b> 
                <p className="vinyl-info">{rec.artist}</p>
              </span>
              <span className="row">
                <b className="text-info">Genre:</b> 
                <p className="vinyl-info">{rec.genre}</p>
              </span>
              <span className="row">
                <b className="text-info">Release Date:</b> 
                <p className="vinyl-info">{rec.release_date}</p>
              </span>
              <span className="row">
                <b className="text-info">Label:</b> 
                <p className="vinyl-info">{rec.label}</p>
              </span>
              <span className="row">
                <b className="text-info ">Price:</b> 
                <p className="vinyl-info" style={{color: "var(--money-green)"}}>$ {rec.price} </p>
              </span>
              <span className="row">
                <b className="text-info">Tracklist: </b>
                <p className="vinyl-info">{rec.tracklist}</p>
              </span>
              <span className="hr"></span>
            </div>
            
          )) }
          </div>          
      </div>    
    </div>    
      
  );
}; export default InventoryList;


