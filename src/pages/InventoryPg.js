import { useState, useEffect } from 'react'; 
import InventoryList from "../components/InventoryList";
import Filter from "../components/Filter";

const InventoryPg = () => {
  
  const [records, setRecords] = useState([]);
  const [filteredRecs, setFilteredRecs] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedReleaseDate, setSelectedReleaseDate] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [labels, setLabels] = useState([]);
  const [releaseDates, setReleaseDates] = useState([]);

  
  const handleArtistChange = (e) => {
    setSelectedArtist(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };
  const handleReleaseDateChange = (e) => {
    setSelectedReleaseDate(e.target.value);
  };

  const handleLabelChange = (e) => {
    setSelectedLabel(e.target.value);
  };

  const filterRecords = () => {
    let filtered = records;
    
    if (selectedArtist) {
      filtered = filtered.filter(rec => rec.artist === selectedArtist);
    }

    if (selectedGenre) {
      filtered = filtered.filter(rec => rec.genre === selectedGenre);
    }
    if (selectedLabel) {
      filtered = filtered.filter(rec => rec.label === selectedLabel);
    }
    if (selectedReleaseDate) {
      filtered = filtered.filter(rec => rec.release_date === selectedReleaseDate);
    }
  
    setFilteredRecs(filtered);
  };
  useEffect( () => {
    fetch('/data/mock_vinyls.json')
    .then(res => res.json())
    .then(data => {
        setRecords(data);
        setFilteredRecs(data);

        // Extract unique artists, genres etc.
        const uniqueArtists = [...new Set(data.map(rec => rec.artist))];
        const uniqueGenres = [...new Set(data.map(rec => rec.genre))]
        const uniqueLabels = [...new Set(data.map(rec => rec.label))]
        const uniqueReleaseDates = [...new Set(data.map(rec => rec.release_date))]

        setArtists(uniqueArtists);
        setGenres(uniqueGenres);
        setLabels(uniqueLabels);
        setReleaseDates(uniqueReleaseDates);

        
    })
    .catch(err => console.error(err));
  }, []);
  
  useEffect(()=> {
    filterRecords();
  },[selectedArtist, selectedGenre, selectedLabel, selectedReleaseDate])
  
  // VIEW
  return (
    <div className="inventory-pg">
      <h1>Inventory Page</h1>
      <Filter
        selectedArtist={selectedArtist}
        selectedGenre={selectedGenre}
        selectedLabel={selectedLabel}
        selectedReleaseDate={selectedReleaseDate}

        handleArtistChange={handleArtistChange}
        handleGenreChange={handleGenreChange}
        handleLabelChange={handleLabelChange}
        handleReleaseDateChange={handleReleaseDateChange}

        filterRecords={filterRecords}
        artists={artists}
        genres={genres}
        labels={labels}
        releaseDates={releaseDates}
      />
      
      <InventoryList records={filteredRecs} />
    </div>
  );
};
export default InventoryPg;
