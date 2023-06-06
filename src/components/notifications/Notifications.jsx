import './Notifications.css'
import Header from '../../UI/Header'
import Menu from '../../UI/Menu'
import { Link } from 'react-router-dom'
import Close from '../../UI/icons/Close'




const Notifications = () => {
    return(
        <div>
            <Header/>
            <div className='containerNotification'>
                <Menu/>
                <div className='containerContentNotification'>
                    <h2 className='push'>Push</h2>
                    <div className='inputContainer'>
                        <div className='inputSort'>
                            <span className='inputSpan'>Выберите тип уведомления</span>
                            <input className='inputNotification' type="text" name="" id="" placeholder='Выберите кому отправить'/>
                        </div>
                        <div className='inputSort'>
                            <span className='inputSpan'>Выберите кому отправить</span>
                            <input className='inputNotification' type="text" name="" id="" placeholder='Выберите кому отправить'/>
                        </div>
                        <div>
                            <div className='containerNotificationInput'>
                                <span className='usersNotification'>Сергей Абрамов<Close/></span>
                                <span className='usersNotification'>Иван Кириллов<Close/></span>
                            </div>
                            <div className='checkboxContatiner'>
                                <input className="customCheckbox" type="checkbox"/>
                                <label>Отправить всем пользователям</label>
                            </div>
                        </div>
                        <div className='inputSort'>
                            <span className='inputSpan'>Тема</span>
                            <input className='inputNotification' type="text" name="" id="" placeholder='Введите текст'/>
                        </div>
                        <div className='inputSort'>
                            <span className='inputSpan'>Описание</span>
                            <input className='descriptionInputNotification' type="text" name="" id="" placeholder='Введите текст'/>
                        </div>
                        <div className='containerBtnNotification'>
                           <Link to='/homepage'><button className='btnBack'>Вернуться назад</button></Link>
                            <button className='btnSend'>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications