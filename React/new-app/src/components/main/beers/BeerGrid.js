import React, { Component } from "react";

import Beer from "./Beer"
import {Header,Spinner} from "../../common";
// import {dummyBeerData} from "../../../constants/dummyData";

import { fetchBeers } from "../../../services/beerService";

class BeerGrid extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading : true,
            beers: [],
        };
    }
    
    scrollParentRef = null;

    fetchBeers = async() => {
        const data = await fetchBeers();

        this.setState({
            beers: data,
            isLoading:false,
        });
    } ;  

    // fetchBeers = async() => {
    //     setTimeout(() => {
    //         this.setState({
    //         beers: dummyBeerData,
    //         isLoading:false,
    //     })
    // }, 2000);
    // };

    componentDidMount() {
        this.fetchBeers();
    }

    render() {
        const { isLoading } = this.state;

       return(
           <div>
               <Header />

               {isLoading ? 
                    <Spinner /> :
               <main>
                   <div className="container"
                        ref={(r) => {this.scrollParentRef = r }}
                    >
                        {this.state.beers.map(beer => (
                            <Beer key={beer.id} beerId={beer}  />
                        ))}
                   </div>
               </main>
               }
           </div>
       );
    }
}

export default BeerGrid;