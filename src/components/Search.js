import React, { useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';


function Search() {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState(null);

    useEffect(() => {
        if (!city) {
            setSearch();
            return;
        }
        const getSearch = async () => {
            const res = await axios.get(
                `https://haunted-site-app.herokuapp.com/locations/search?query=${city}`
            );
            setSearch(res.data);
        };
        getSearch();
}, [city]);

    return (
    <div>
        <input type='text' 
        className='searchBar' 
        placeholder='Search Location'
        value={city}
        onChange={(event) => setCity(event.target.value)}
        />
        {/* && means - returns true if both operands are true and returns false otherwise. */}
        {search &&
            search.map((result) => (
                <Link to={`/locations/${result.id}`} key={result._id}>
                    {result.location}
                </Link>
            ))}
        <button FontAwesomeIcon icon={faMagnifyingGlassLocation}></button>
    </div>
    );    
}

export default Search