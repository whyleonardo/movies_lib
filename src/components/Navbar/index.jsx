import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav>
        <h2>
          <Link to="/">MoviesLib</Link>
          <Link to="/search">MoviesLib</Link>
          <Link to="/movie/1">MoviesLib</Link>
        </h2>
      </nav>
    </div>
  )
}
