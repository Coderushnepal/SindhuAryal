import http from "../utils/http";

export const fetchBeers = async(page=1, size=25, beerName) =>  {
    const params = { 
        page: page, 
        per_page:size,
    };

    if(!!beerName) {
        params.beer_name = beerName;
    }

    const { data } = await http.get('/beers',{ params });
    return data;
};

export const fetchBeerById = async(id) => { 
    const { data } = await http.get(`/beers/${id}`);
    return data[0];
}