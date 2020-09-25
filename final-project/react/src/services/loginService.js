import http from '../utils/http';

export async function login(email, password) {
    const { data } = await http.post('/admin', {
        email,
        password
    });
    
    console.log(data.data);
    return data.data
}