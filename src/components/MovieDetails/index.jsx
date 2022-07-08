
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import api from '../../services/api';

const apiImg = api.img

export const MovieDetails = ({ movie }) => {
  return (
    <div
      className="">
      <img
        src={apiImg + movie.poster_path}
        alt={movie.title}
        className='w-[18.9rem] h-[28.18rem] transition rounded duration-500 hover:scale-[1.02]' />
      <h2
        className=''>
        {movie.title}
      </h2>
      <p
        className=''>
        <FaStar
          className='text-brand-700' /> {movie.vote_average}
      </p>
    </div>
  )
}
