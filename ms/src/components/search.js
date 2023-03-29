import React, {useState} from 'react'


export default function SearchBar({ setSearchBar }) {
    const [searchBarQuery, setSearchBarQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchBar(searchBarQuery);
      };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for movie..."
                value={searchBarQuery}
                onChange={(e) => setSearchBarQuery(e.target.value)}js
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchBarQuery.trim().length < 3) {
                        e.preventDefault();
                    }
                }}
            />
            <button type="submit">Search</button>
        </form>
    );
}