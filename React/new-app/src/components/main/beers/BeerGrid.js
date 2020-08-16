import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

import Beer from "./Beer"
import {Header,Spinner} from "../../common";
// import {dummyBeerData} from "../../../constants/dummyData";
import { fetchBeers } from "../../../services/beerService";
import iziToast from "izitoast";

class BeerGrid extends Component {
    constructor(props){
        super(props);

        this.state = {
            // isLoading : true,
            beers: [],
            pageInfo: {page:1, size:25 },
            hasMore: true,
        };
    }
    
    // toggleLoading = (value) => {
    //     this.setState({
    //         isLoading: value,
    //     });
    // };

    scrollParentRef = null;

    fetchBeers = async() => {
        try{
            const {page,size} = this.state.pageInfo;

            // this.toggleLoading(true);
            const data = await fetchBeers(page + 1, size); //sending default values of page and size to beerService.js

            this.setState({
                beers: [...this.state.beers, ...data],  
                // isLoading:false,
                pageInfo: {
                    ...this.state.pageInfo,         //spread gareko- yo garda pageInfo ko sabai original values haru aauncha
                    page: data.length ? page + 1 : page,                 //original value lai replace gardincha
                },
                hasMore: !!data.length ,
            });
        } catch(error) {
            const  errorMsg = error.response.data.message;

            // this.toggleLoading(false);

            iziToast.error({
                title: "Oh Snap!!",
                message:errorMsg
            });
        }
       
    } ;  

    componentDidMount() {
        this.fetchBeers();
    }

    render() {
        const { beers, hasMore } = this.state;

       return(
           <div>
               <Header />

               {/* {isLoading ?  */}
                    {/* <Spinner /> : */}
               <main>
                   <div className="container"
                        ref={(r) => {this.scrollParentRef = r }}
                    >
                        <InfiniteScroll 
                            dataLength={beers.length}
                            next={this.fetchBeers}
                            hasMore={hasMore}
                            loader= {<Spinner />}
                        >
                            {beers.map(beer => (
                            <Beer key={beer.id} info={beer}  />
                        ))}
                        </InfiniteScroll>
                   </div>
               </main>
               {/* } */}
           </div>
       );
    }
}

export default BeerGrid;