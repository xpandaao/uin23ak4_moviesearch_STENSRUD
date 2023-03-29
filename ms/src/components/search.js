import React, {useState} from 'react'


export default function searchBar({ setSearchBar }) {
    const [searchBarQuery, setSearchBarQuery] = useState('');

    const handleSearch = (s) => {
        s.preventDefault();
        setSearchBar(searchBarQuery);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search here..."
                value={searchBarQuery}
                onChange={(s) => setSearchBarQuery(s.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}