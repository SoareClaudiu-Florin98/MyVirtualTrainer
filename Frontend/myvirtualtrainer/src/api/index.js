import axios from "axios";
export async function getUser() {
    try {
        const response = await axios.get("https://localhost:44361/auth/user", {
            withCredentials: true,
        });
        return response.data;
        
    } catch (error) {
        console.error(error);
    }
}
