import React, {useState} from 'react'


export default function SearchBar({ setSearchBar }) {
    const [searchBarQuery, setSearchBarQuery] = useState('');

    const handleSearch = (s) => {
        s.preventDefault();
        setSearchBar(searchBarQuery);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for movie..."
                value={searchBarQuery}
                onChange={(s) => setSearchBarQuery(s.target.value)}
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