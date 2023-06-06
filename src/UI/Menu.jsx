import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return(
        <div className='containerMenu'>
            <Link to='/proposition'><button className='menuBtn'>Предложения</button></Link>
            <Link to='/moderators'><button className='menuBtn'>Модераторы</button></Link>
            <Link to='/education'><button className='menuBtn'>Обучение</button></Link>
            <Link to='/notification'><button className='menuBtn'>Уведомление</button></Link>
        </div>
    )
}

export default Menu