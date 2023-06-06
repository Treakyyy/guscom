import './Header.css'
import Chess from './icons/Chess'
import Avatar from './icons/Avatar'



const Header = () => {
    return(
        <div className='containerHeader'>
            <div className='gameHeader'>
                <Chess/>
                <span>Life Game</span>
            </div>
            <div className='avatarHeader'>
                <button className='headerBtn'>Обновить</button>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header