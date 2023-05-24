import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom'
import logo from '../assets/react.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <a href='https://react.dev' target='blank'>
            <img
              src={logo}
              className='logo react'
              style={{ height: 100, margin: 10 }}
              alt='React_Logo'
            />
          </a>
          <ul>
            <li>
              <NavLink className='a' to='/lazy1'>
                Lazy1
              </NavLink>
              <NavLink className='a' to='/lazy2'>
                Lazy2
              </NavLink>
              <NavLink className='a' to='/lazy3'>
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/lazy1' element={<LazyPage1 />} />
          <Route path='/lazy2' element={<LazyPage2 />} />
          <Route path='/lazy3' element={<LazyPage3 />} />
          <Route path='/*' element={<Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </Router>
  )
}
