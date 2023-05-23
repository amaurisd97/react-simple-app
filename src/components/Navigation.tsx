import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'
import logo from '../assets/react.svg'

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
              <NavLink className='a' to='/'>
                Home
              </NavLink>
              <NavLink className='a' to='/about'>
                About
              </NavLink>
              <NavLink className='a' to='/users'>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='about' element={<h1> About </h1>} />
          <Route path='users' element={<h1> Users </h1>} />
        </Routes>
      </div>
    </Router>
  )
}
