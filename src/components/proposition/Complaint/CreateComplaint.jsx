import './CreateComplaint.css'
import Header from '../../../UI/Header'
import Menu from '../../../UI/Menu'
import Close from '../../../UI/icons/Close'
import { Link } from 'react-router-dom'

const CreateComplaint = () => {
    return(
        <div>
            <Header/>
            <div className='containerCreateComplaint'>
                <Menu/>
                <div className='contentCreateComplaint'>
                    <h2 className='createComplaint'>Жалоба</h2>
                    <span className='userCreateComplaint'>Сергей Абрамов <Close/></span>
                    <div className='headerComplaint'>
                        <span className='headerColor'>Заголовок жалобы</span>
                        <input className='smallInputHeader' type="text" placeholder='Плохо работает приложение'/>
                    </div>
                    <div className='headerComplaint'>
                        <span className='headerColor'>Описание</span>
                        <input className='descriptionInputHeader' type="text" placeholder='Введите текст'/>
                    </div>
                    <div className='ContainerBtnCreateComplaint'>
                       <Link to='/proposition'><button className='btnBack'>Вернуться назад</button></Link>
                        <button className='btnSend'>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateComplaint