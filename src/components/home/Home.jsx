
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
<h1>Welcome Buddy</h1>
<p>SignUp Here!     <Link to="/signup">
            <button type="button">
              Sign Up
            </button>

          </Link> Click To LogIn
          </p>
    </div>
  )
}

export default Home

