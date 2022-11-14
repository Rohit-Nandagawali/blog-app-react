import './PageNotFound.css'

import {Link} from 'react-router-dom'
const PageNotFound = () => {
    return ( 
        <div className="PageNotFound">
            <img src="https://user-images.githubusercontent.com/85486891/201648287-8b4071b5-7b72-4d6d-93f6-8cbb2b4e91e0.gif" alt="404" />
            <Link to="/">Go to Homepage {">"} </Link>
        </div>
     );
}
 
export default PageNotFound;