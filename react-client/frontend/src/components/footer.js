import { useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation();

  return ( 
    <div class="text-center text-lg">
      {(location.pathname==="/login") ? <a href='/register'>Register</a> : <a href='/login'>Login</a>}
    </div>
  )};
  
  export default Footer;