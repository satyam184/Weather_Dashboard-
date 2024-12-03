import axios from 'axios' ; 

export const fetchFavorites = async () => {
    try {
        const response = await axios.get("http://localhost:5000/favorites");
        return response.data ;
        
    } catch (error) {
        console.error(error);
        throw  error ;
        
    }};


//* working
export   const addToFavorites = async (city) => {
    try {
     await axios.get("http://localhost:5000/favorites/" + city.id) ;
    } catch (error) {

        try {
            await axios.post("http://localhost:5000/favorites", {
                name: city.name,
                id: city.id,
            
           })} catch (error) {
                throw new Error("Unable to add to favorites")
           }
    }
}


 // const removeFromFavorites = async (id) => {
  //   console.log("id: ", id)
  //   await axios.delete(`http://localhost:5000/favorites/${id}`);
  //   fetchFavorites();
  // };
export const removeFromFavorites = async (id)=>{
    try {
        console.log("id: ", id) ;
        await axios.delete(`http://localhost:5000/favorites/${id}`);
        return ; 

    } catch (error) {
        throw new Error(`Failed to remove`
            )
    }
    
}
        
  