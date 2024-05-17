import { AiOutlineArrowLeft } from 'react-icons/ai';
import './styles.css'
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className='d-flex align-items-center justify-content-center'>
            <div className="bg-white p-5 rounded shadow text-center">
                <h1 className="main-text">Oops!</h1>
                
                <h2>Sorry, an unexpected error has occurred.</h2>
                <h1>{error.statusText || error.message}</h1>

                <Link className="text-center" to='/'>
                    <p>
                        <AiOutlineArrowLeft />
                        Return To Home
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;