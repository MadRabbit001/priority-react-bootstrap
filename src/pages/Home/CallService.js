import axios from 'axios';

// GET request
export const getData = async () => {
    try {
        const response = await axios.get('http://localhost:8080/#');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// POST request
const postData = async (data) => {
    try {
        const response = await axios.post('https://example.com/api/data', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// PUT request
export const putData = async (id, data) => {
    try {
        const response = await axios.put(`http://localhost:8080/{id}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// DELETE request
const deleteData = async (id) => {
    try {
        const response = await axios.delete(`https://example.com/api/data/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};