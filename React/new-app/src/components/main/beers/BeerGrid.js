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
            pageInfo: {page:0, size:25 },
            hasMore: true,
            searchFor: "",
            hasFilter: false,
        };
    }
    
    // toggleLoading = (value) => {
    //     this.setState({
    //         isLoading: value,
    //     });
    // };

    scrollParentRef = null;

    setSearchText = (searchText)  => {
        this.setState({
            searchFor : searchText,
            hasFilter: true,
        }, ()=> this.fetchBeers()
        );
    };

    fetchBeers = async() => {
        try{
            const{beers, pageInfo,searchFor,hasFilter} = this.state;
            let {page,size} = pageInfo;

            // if(!!searchFor) {
            //     page=0;
            // }

            if(hasFilter){
                page = 0;
            }

            // this.toggleLoading(true);
            const data = await fetchBeers(page + 1, size, searchFor);              //sending default values of page and size to beerService.js
            this.setState({
                // beers: [...beers, ...data], 
                beers: hasFilter ? data : [...beers, ...data], 
                // isLoading:false,
                pageInfo: {
                    ...pageInfo,                                         //spread gareko- yo garda pageInfo ko sabai original values haru aauncha
                    page: data.length ? page + 1 : page,                 //original value lai replace gardincha
                },
                hasMore: !!data.length ,
                hasFilter: false,
            });
        } catch(error) {
            const  errorMsg = error.response.data.message;
            // this.toggleLoading(false);s
            iziToast.error({
                title: "Oh Snap!!",
                message:errorMsg,
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
               <Header setSearchText={this.setSearchText} />

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