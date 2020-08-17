import React from 'react';
import Header from '../common/Header';
import Beer from "../main/beers/Beer"

import { dummyBeerData } from "../../constants/dummyData";

class Favourites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchFor: "",
        };
    }

    setSearchText = (searchText) =>{
        this.setState({
            searchFor: searchText,
        });
    };

    render() {
        let favourites = dummyBeerData;

        if(!!this.state.searchFor){
            favourites = favourites.filter((beer) => 
                beer.name.toLowerCase().includes(this.state.searchFor.toLowerCase())
            );
        }
        
        return (
            <div className="wrapper">
                <Header setSearchText={this.setSearchText} />

                <main>
                    <div className="container">
                        {!!favourites.length &&
                            favourites.map((beer) => <Beer key={beer.id} info={beer} /> )}
                    </div>
                </main>
            </div>
        );
    }
}

export default Favourites;