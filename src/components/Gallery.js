import { Card } from "./Card";
import { useState, useEffect } from 'react';

export const Gallery = () => {
    const [images, setImages] = useState([]);
  
  useEffect(()=> {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.log(data)
    const basicImages = data.results.map((response) => {
          return{
            id: response.id,
            url: response.image,
            title: response.name,
            gender: response.gender,
            status: response.status
          }
        })
      setImages(basicImages);
  }
  
  return (
      
      <div className='container'>
        {images.map((element) => (
          <Card
            id={element.id}
            title={element.title}
            img={element.url}
            gender={element.gender}
            status={element.status}
          />
        ))}
      </div>    
  );
}