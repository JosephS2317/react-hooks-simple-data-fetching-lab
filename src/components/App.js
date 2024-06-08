// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [dogImage, setDogImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response)=>response.json())
        .then((data)=>{
            setDogImage(data.message)
            setLoading(false)
        })
        .catch((error)=> {
            console.error("Error fetching data")
            setLoading(false)
        })
    }, [])

    return(
        <div className="App">
            {loading ? (
            <p>Loading...</p>
            ) : (
                <div>
                <img
                alt="A Random Dog" 
                src={dogImage}
                 />
                
                </div>
            )}
        </div>

    )
}

export default App;
