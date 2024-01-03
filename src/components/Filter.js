import { useState, useEffect } from 'react'; 

const Filter = ({
    selectedArtist,
    selectedGenre,
    selectedReleaseDate,
    selectedLabel,

    handleArtistChange,
    handleGenreChange,
    handleReleaseDateChange,
    handleLabelChange,

    filterRecords,

    artists,
    genres,
    releaseDates,
    labels


}) => {
    

    // const handleFilterClick = () => {
    //     filterRecords();
    //     console.log('hello');
    // }

    return (
        <div>
          <label>Artist:</label>
          <select value={selectedArtist} onChange={handleArtistChange}>
            <option value="">All</option>
            {artists.map(artist => (
                <option key={artist}>{artist}</option>
            ))}

          </select>
    
          <label>Genre:</label>
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option value="">All</option>
            {genres.map(genre => (
                <option key={genre}>{genre}</option>
            ))}
          </select>
          <label>Label:</label>
          <select value={selectedLabel} onChange={handleLabelChange}>
            <option value="">All</option>
            {labels.map(label => (
                <option key={label}>{label}</option>
            ))}
          </select>
          <label>Release Date:</label>
          <select value={selectedReleaseDate} onChange={handleReleaseDateChange}>
            <option value="">All</option>
            {releaseDates.map(date => (
                <option key={date}>{date}</option>
            ))}
          </select>
    
          {/* <button onClick={handleFilterClick}>Apply Filters</button> */}
        </div>
      );
}; export default Filter;


