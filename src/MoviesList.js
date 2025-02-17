import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchMovies = async () => {
    const response = await axios.get('http://localhost:5000/movies')
    return response.data
  }  

const MoviesList = () => {
    const { data: list, error, isLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
})
  
    if (isLoading) return <p>טעינה...</p>
    if (error) return <p style={{ color: 'red' }}>שגיאה: {error.message}</p>

// const MoviesList = () => {
//     const [ list , setList] = useState ([])
//     const [error , setError] = useState (null)

//     useEffect(()=>{
//         const fetchMovies = async () => {
//             try{
//                 const response = await axios.get('http://localhost:5000/movies')
//                 setList (response.data)

//             } catch (err) {
//                 setError ( "error")
//             }
//         };    
//         fetchMovies();
//     }, []); 

    // if (error) return <p style={{ color: 'red' }}>error : {error}</p> 

//     return (
//         <div>
//             <h1>Movies List</h1>
//             <ul>
//                 {list.map((movie, index) => (
//                     <li key={index}>
//                         {movie.title} ({movie.year})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

return (
    <div style={styles.moviesList}>
      <h1 style={styles.header}>רשימת סרטים</h1>
      <div style={styles.movieGrid}>
        {list.map((movie, index) => (
          <div key={movie.id} style={styles.movieItem}>
            <img src={movie.imageUrl} alt={movie.title} style={styles.movieImage} />
            <div style={styles.movieInfo}>
              <h2>{movie.title} ({movie.year})</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  moviesList: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
  },
  movieGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  movieItem: {
    width: 'calc(25% - 20px)', // 4 סרטים בשורה
    marginBottom: '20px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  movieImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  movieInfo: {
    paddingTop: '10px',
    textAlign: 'center',
  },
};


export default MoviesList

