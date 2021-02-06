import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
    const [searchTerm, setsearchTerm] = useState('');
    const [results, setResults] = useState([]);
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm
                }
            });
            setResults(data.query.search);
        }
        // Throttle api call to wikipedia - limit api calls to 1 api call / second
        const timeoutId = setTimeout(() => {
            if (searchTerm) search();
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [searchTerm]);
    const stripHTML = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || '';
    }
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button">Go To page</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {stripHTML(result.snippet)}
                </div>
            </div>
        );
    })
    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="searchText">Enter search term</label>
                <input
                    id="searchText"
                    type="text"
                    className="input"
                    value={searchTerm}
                    onChange={e => setsearchTerm(e.target.value)}
                />
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;