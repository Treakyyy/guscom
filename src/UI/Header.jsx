import './Header.css'
import Chess from './icons/Chess'



const Header = () => {
    return(
        <div className='containerHeader'>
            <div className='gameHeader'>
                <Chess/>
                <span>Life Game</span>
            </div>
            <div>
                <button></button>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Header