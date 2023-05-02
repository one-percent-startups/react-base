import Cookie from 'js-cookie';
import { Navigate } from 'react-router-dom'

const Logout = () => {
  Cookie.remove('shaping3DKey')
  return <Navigate to="/" />
}

export default Logout;