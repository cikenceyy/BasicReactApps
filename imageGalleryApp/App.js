import { formToJSON } from 'axios';
import './App.css';
import Images from "./images"
import React, { useState } from "react"

function App() {

  const [selectedImageUrl, setSelectedImageUrl] = useState(Images[0].url)
  const [selectedImageAlt, setSelectedImageAlt] = useState(Images[0].alt)

  return (
    <div className="App">
      <div className="selectedImage">
        <img src={selectedImageUrl} alt={selectedImageAlt} />
      </div>
      <div className="images">
        {
          Images.map((image, index) => (
            <img key={index} src={image.url} alt={image.alt}
              onClick={() => {
                setSelectedImageUrl(image.url)
                setSelectedImageAlt(image.alt)
              }}
            />
          ))
        }
      </div>
    </div>
  );

}

export default App;
