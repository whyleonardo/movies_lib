import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/index';

export const App = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Navbar />
      <Outlet />
    </div>
  )
}
