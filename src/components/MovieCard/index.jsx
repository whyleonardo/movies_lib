
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import api from '../../services/api';

const apiImg = api.img

export const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-brand-50 mx-4 my-6 gap-2 py-4 px-4 rounded">
      <img
        src={apiImg + movie.poster_path}
        alt={movie.title}
        className='w-3/4 h-[75%] transition rounded duration-500 hover:scale-[1.02]' />
      <h2
        className='text-lg text-center font-bold'>
        {movie.title}
      </h2>
      <p
        className='flex items-center gap-1 '>
        <FaStar
          className='text-brand-700' /> {movie.vote_average}
      </p>

      {showLink
        &&
        <Link
          className='bg-brand-700 border border-brand-700 rounded py-1 px-2 transition-all duration-500 hover:bg-brand-50 group hover:border-brand-700'
          to={`/movie/${movie.id}`}>
          More Details
        </Link>}
    </div>
  )
}
