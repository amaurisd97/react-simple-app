import { NavLink, Route, Routes } from 'react-router-dom'
import LazyPage1 from '../pages/LazyPage1'
import LazyPage2 from '../pages/LazyPage2'
import LazyPage3 from '../pages/LazyPage3'

export default function LazyLayout() {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to='lazy1'>Lazy1</NavLink>
        </li>
        <li>
          <NavLink to='lazy2'>Lazy2</NavLink>
        </li>
        <li>
          <NavLink to='lazy3'>Lazy3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='lazy1' element={<LazyPage1 />} />
        <Route path='lazy2' element={<LazyPage2 />} />
        <Route path='lazy3' element={<LazyPage3 />} />
      </Routes>
    </div>
  )
}
