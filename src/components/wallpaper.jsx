import React, { useEffect, useState } from 'react';
import axios from "axios";

    function Wallpaper() {
        const [photo, setPhoto] = useState("");
        const [clientId, setClientId] = useState("mByK_IfYlgDBjgHsPnwBOpJ_P2MS2muW7jBKA0-4wYE");
        const [result, setResult] = useState([]);

        function handleChange(event) {
            setPhoto(event.target.value);
        }
        function handleSubmit(event) {
            console.log(photo);
            const url="https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;
            axios.get(url).then(response => {
                console.log(response);
                setResult(response.data.results);
            });
        }

        return(
            <div className="Wallpaper">
                <h1>Unsplash Wallpaper Search!</h1>
                <input onChange={handleChange} type="text" name="photo" placeholder="Search Wallpapers" />
                <button className="btn btn-success" onClick={handleSubmit} type="submit"> Search! </button>
            <div className="row">
            <div >
                {result.map((photo) => (
                    <img className="col-4" src={photo.urls.small}></img>
                ))
                }
            </div>
            </div>
            </div>           
        );
}


export default Wallpaper;