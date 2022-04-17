import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIDFromButtonClick] = useState(1)

    const handleClick = () => {
        setIDFromButtonClick(id)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/${id}')
        .then(res => {
            console.log(res)
           setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
         <input type="button" onClick={handleClick}>Fetch Post</input>
         <div>{posts.title}</div>
          {/*} <ul>
               {
                   posts.map(post => <li key={post.id}>{post.title}</li>)
               }
            </ul>   */}
        </div>
    )
}

export default DataFetching
