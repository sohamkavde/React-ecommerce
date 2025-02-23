import axios from 'axios'; 
const BASE_URL = 'http://localhost:8000/'||process.env.REACT_APP_DBURL ;

export const getUserData = async (email) => {
    try {
        const response = await axios.get(`${BASE_URL}login/${email}`);        
        return response.data; 
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};
 