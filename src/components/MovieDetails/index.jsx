import { FaStar } from 'react-icons/fa'
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import api from '../../services/api';

const apiImg = api.img

export const MovieDetails = ({ movie }) => {
  return (
    <div
      className="flex py-8 px-4 justify-around bg-brand-50 ">
      {/* IMG */}
      <div>
        <img
          src={apiImg + movie.poster_path}
          alt={movie.title}
          className='w-[18.9rem] h-[28.18rem] transition rounded duration-500 hover:scale-[1.02]'
        />
      </div>
      <div className='flex flex-col items-center gap-8'>
        <h2
          className='uppercase font-bold text-xl'
        >
          {movie.title}
        </h2>
        {/* OVERVIEW */}
        <div
          className='flex flex-col items-center gap-2 max-w-2xl'
        >
          <BsFillFileEarmarkTextFill
            size={24}
            className='text-brand-700'
          />
          <p
            className=' '
          >
            {movie.overview}
          </p>
        </div>
        {/* INFOS */}
        <div className=" flex flex-col self-start gap-2">
          <span
            className='flex FLEX-COL items-center gap-2'>
            <BsHourglassSplit
              className='text-brand-700'
            />
            Release Date: {movie.release_date}
          </span>

          <span
            className='flex items-center gap-2'
          >
            <BsWallet2
              className='text-brand-700'
            />
            Budget: U${movie.budget.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>

          <span
            className='flex items-center gap-2'
          >
            <BsGraphUp
              className='text-brand-700'
            />
            Revenue: U${movie.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>

          <span
            className='flex items-center gap-2'
          >
            <FaStar
              className='text-brand-700' />
            Avaliation: {movie.vote_average}
          </span>

        </div>

      </div>
    </div>
  )
}
