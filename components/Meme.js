import React, {useState} from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: '',
            bottomText: '',
            randomImage: '../images/default.jpg'
        }
    );
    
    const [allMemeImages, setAllMemeImages] = useState(memesData);
    
    function getRandomMeme(){
        const memes = allMemeImages.data.memes;
        const meme = memes[Math.floor(Math.random() * memes.length)];
        setMeme(prevMeme => ({...prevMeme, randomImage: meme.url}));
        return meme;
    }
    
    function handleChange(event){
        const {value, name} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }
    
    console.log(meme);
    
    return(
        <main className="meme-container">
            <div>
                <div className="input-text-container">
                    <input
                        type="text"
                        placeholder="Top text"
                        onChange={handleChange}
                        value={meme.topText}
                        name="topText"
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        onChange={handleChange}
                        value={meme.bottomText}
                        name="bottomText"                                             
                    />
                </div>    
                <button onClick={getRandomMeme}>Get a new meme image</button>
                <div className="meme">
                    <img src={meme.randomImage} />
                    <p className="meme-text-top">{meme.topText}</p>
                    <p className="meme-text-bottom">{meme.bottomText}</p>                    
                </div>              
            </div>
        </main>
    );
}