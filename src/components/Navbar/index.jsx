import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react';

export const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <header
      className="flex h-14 bg-brand-500">
      <nav
        className="flex items-center justify-between w-full px-3">
        <div
          className='group'>
          <Link
            className='flex items-center font-black text-3xl text-brand-700 duration-500 transition-all group-hover:tracking-wide'
            to="/">

            <BiCameraMovie
              className='mr-1' size={36} />

            <span
              className='text-white'>
              Movies
            </span>
            <span>
              Lib
            </span>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className='flex items-center gap-2'>
          <label
            htmlFor="Search an Movie" />
          <input
            onChange={event => setSearch(event.target.value)}
            value={search}
            type="text"
            placeholder='Search an Movie'
            className='rounded p-1 border border-white bg-white transition-all duration-500 h-2/4 focus:outline-none ' />

          <button
            type='submit'
            className='bg-brand-700 border border-brand-700 rounded py-1 px-2 h-2/4 transition-all hover:bg-brand-200 group hover:border-brand-700'>
            <BiSearchAlt2
              className='text-brand-200 transition-all duration-500 group-hover:text-brand-700' size={24} />
          </button>
        </form>
      </nav>
    </header>
  )
}
