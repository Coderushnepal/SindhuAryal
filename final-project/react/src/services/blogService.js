import http from '../utils//http';

export const fetchBlogsById  = async (id) => {
    //call single blogs async api
    const { data } =await http.get(`/blogs/${id}`);
    console.log(data)

    return data.data;  
}