import Controls from '../../UI/Controls'
import Dropdown from '../../UI/Dropdown'
import Header from '../../UI/Header'
import Menu from '../../UI/Menu'
import './User.css'
import UserAction from './usersAction/UserAction'
import UserBlock from './usersAction/UserBlock'
import UserTarget from './usersAction/UserTarget'

const User = () => {
    return(
        <div>
            <Header/>
            <div className='containerUser'>
                <Menu/>
                <div className='contentUser'>
                    <h2 className='headerUser'>Новый урок</h2>
                    <Controls/>
                    <div className='userProfile'>
                        <div className='userNameAndStatus'>
                            <span className='textUser'>Ф.И.О.</span>
                            <span className='textUser'>Статус</span>
                        </div>
                        <hr width='650px' align='space-around'/>
                        <div className='userAbout'>
                            <span className='textUser'>1</span>
                            <span className='textUser'>Обучение Радислава Гандапаса</span>
                            <span className='textUser'>Активный</span>
                            <Dropdown/>
                        </div>
                        <hr width='890px' align='space-around'/>
                    </div>
                    <UserBlock/>
                    <UserTarget/>
                    <UserAction/>
                    <UserAction/>
                    <UserAction/>
                </div>
            </div>
        </div>
    )
}

export default User