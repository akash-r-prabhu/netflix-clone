import React,{useState} from 'react'

function Row ({title}) {
    const [movies, setMovies] = useState([]);
  return (
    <div>
        {/* Title */}
        <h1>{title}</h1>
        {/* container with porters inside */}
    </div>
  )
}

export default Row;