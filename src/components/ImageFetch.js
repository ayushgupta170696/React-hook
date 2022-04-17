import React , {useState, useEffect} from 'react';
import axios from 'axios';
import Image from 'react';

function DataFetch() {
    const [images, setImages]  = useState([])
    //const [id, setId] = useState(1)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
        //    console.log(res)
            setImages(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <>
    
        images.map(img => {
    
        console.log(img.url);
        <img src={img.url}></img>
        }
    
    )
</>
    )
}

export default DataFetch

    {/*
    <Image>
            image= {img.url}
        </Image>


        // other method
  return (
      <>
      <ul>{
       images.map(post  => (
                <li key={post.id}>{post.url}</li>
            ))
       }
            </ul>
      </>
    )  */}
