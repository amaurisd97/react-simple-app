import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom'
import logo from '../assets/react.svg'
import { routes } from './routes'
import { Suspense } from 'react'

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
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
              {routes.map(({ name, to }) => (
                <li key={name.concat(to)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'nav-active a' : 'a'
                    }
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ name, path, Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  )
}
