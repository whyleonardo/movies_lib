import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { MovieDetails } from '../../components/MovieDetails/index';

const moviesURL = api.url
const apiKey = api.key

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    setMovie(data);
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [])

  return (
    <div className='h-full w-full text-white border border-red-500'>
      {movie &&
        <MovieDetails movie={movie} />
      }
    </div>
  )
}
