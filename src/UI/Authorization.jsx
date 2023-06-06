import './Authorization.css'
import { Link } from 'react-router-dom'

const Authorization = () => {
    return(
        <div className='containerAuthorization'>
            <div className='Authorization'>
                <div className='contentAuthorization'>
                    <h2 className='headerAuthorization'>Авторизация</h2>
                    <div className='containerInputAuthorization'>
                        <input className='inputAuthorization' type="text" placeholder='Email'/>
                        <input className='inputAuthorization' type="password" placeholder='Пароль'/>
                        <div className='checkboxAuthorization'>
                            <input className='customChecboxAuthorization' type="checkbox" />
                            <label className='checkboxLabel'>Запомнить меня</label>
                        </div>
                    </div>
                    <Link to='/errorauthorization'><button className='btnAuthorization'>Войти</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Authorization