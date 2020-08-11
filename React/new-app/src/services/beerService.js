import {dummyBeerData} from "../constants/dummyData";

export const fetchBeers = async() =>  {
    // const data = await setTimeout(() => { 
        return dummyBeerData;
    // });
}

export const fetchBeerById = async(id) => { 
    return dummyBeerData[id-1];
}