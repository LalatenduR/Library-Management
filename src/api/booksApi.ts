import axios from "axios"

const fetchcategories = async()=>{
    try{
        const {data}=await axios.get("http://localhost:8000/api/v1/books/mycategories");
        return data.data;
    }
    catch(error)
    {
        console.log("API ERROR:",error)
    }
}

const fetchlatestbooks = async()=>{
    try{
        const token = localStorage.getItem('token');
        const {data}=await axios.get("http://localhost:8000/api/v1/books?sortBy=createdAt&sortOrder=desc&page=1&limit=6",{
            headers:{
                'Authorization': `Bearer ${token}`,
            },
        });
        return data.data;
    }
    catch(error)
    {
        console.log("API ERROR:",error);
    }
}

export {
    fetchcategories,
    fetchlatestbooks
}