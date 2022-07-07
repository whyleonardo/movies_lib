import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { Search } from './pages/Search'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Movie />
    </div>
  )
}
