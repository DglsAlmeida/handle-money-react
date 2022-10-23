import {
  BrowserRouter,
  Route,
  Routes as RoutesReactDom
} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesReactDom>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route index element={<Home />} />
      </RoutesReactDom>
    </BrowserRouter>
  )
}
