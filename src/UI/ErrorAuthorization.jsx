import { Link } from 'react-router-dom'
import './ErrorAuthorization.css'
import Close from './icons/Close'

const ErrorAuthorization = () => {
    return(
        <div className='containerErrorAuthorization'>
            <div className='errorAuthorization'>
                <div className='contentErrorAuthorization'>
                    <div className='circle'><Close/></div>
                    <h2 className='textAuthorization'>Вход в личный кабинет не выполнен</h2>
                    <span className='textAuthorization'>Произошла Ошбика</span>
                    <Link to='/'><button className='btnAuthorization'>На страницу авторизации</button></Link>
                    <Link to='/homepage'><button className='website'>website</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorAuthorization