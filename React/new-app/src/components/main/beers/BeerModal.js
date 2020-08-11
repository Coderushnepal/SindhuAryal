import React, { Component } from "react";
import PropTypes from "prop-types";


import {Modal, Spinner} from "../../common";
import {fetchBeerById} from "../../../services/beerService"

class BeerModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading : true,
            beer : {},
        };
    }

    fetchBeer = async() =>  {
       const data = await fetchBeerById(this.props.beerId);

       this.setState({
           beer: data,
           isLoading: false,
       });
    };

    componentDidMount() {
        this.fetchBeer();
    }


    render() {
        const { isLoading,beer } = this.state;
        const { id,handleClose, show } = this.props;
        const { image_url, name,tagline, ibu,abv, ebc,description, food_pairing} = beer;

        return (
            <Modal show={show} handleClose={handleClose}>
                {isLoading ? (
                <Spinner /> 
                ) : (
                    <div className="DescriptionModal clearfix">
                    <div>
                         <div className="DescriptionModal__left">
                             <div 
                               className="DescriptionModal__left__imgcontainer" 
                               style={{backgroundImage : `url(${beer.image_url})` }}
                             />
                         </div>
                         <div className="DescriptionModal__right">
                             <div>
                                 <h1>{name}</h1>
                                 <span className="DescriptionModal__right__title"> {tagline} </span>
                                 <ul>
                                     <li>
                                         <span className="bold">IBU:</span> {ibu}
                                     </li>
                                     <li>
                                         <span className="bold">ABV:</span> {abv}
                                     </li>
                                     <li>
                                         <span className="bold">EBC:</span> {ebc}
                                     </li>
                                 </ul>
                                 <p>{description}</p>
                                 {!!food_pairing.length && (
                                         <div className="DescriptionModal__right__list">
                                             <span>Best served with: </span>
                                             <ul>{food_pairing.map((food, index) => <li key={food}> {food} </li>)}</ul>
                                         </div>
                                 ) }
                              </div>
                         </div>
                    </div>
                </div>
                )}
               
            </Modal>
        );
    }
}

BeerModal.propTypes = {
    beerId: PropTypes.number,
    handleClose: PropTypes.func,
    show: PropTypes.bool,
};

export default BeerModal;