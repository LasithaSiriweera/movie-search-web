import React, { Component } from 'react';
import './styles.css';

class SearchBar extends Component {

    componentDidMount() { }

    render() {
        return (
            <div className="search-bar">
                <input className="search-input" placeholder="Move Name" ></input>
            </div>
        );
    }
}

export default SearchBar;

