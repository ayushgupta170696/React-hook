import React , {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetch() {
    const [posts, setPost]  = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
  return (
    <div>
         {/*
        <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
        <div>{post.title}</div>
       */}
        <ul>
            {
            posts.map(post  => (
                <li key={post.id}>{post.title}</li>
            ))
         }
        </ul>  
    </div>
  )
}

export default DataFetch