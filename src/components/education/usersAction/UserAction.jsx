import Pen from '../../../UI/icons/Pen'
import './UserAction.css'

const UserAction = () => {
    return(
        <div className='action'>
            <div className='descriptionUser'>
                <div className='containerUserHeader'>
                    <div className='redRectangle'></div>
                    <span className='actionText'>Действия <Pen/></span>
                </div>
                <div className='contentUserBody'>
                    <span className='actionText'>Цель</span>
                    <input className='userActionInput' type="text" name="" id="" placeholder='Заработать 1 000 000 рублей'/>
                </div>
                <div className='contentUserBody'>
                    <span className='actionText'>Название</span>
                    <input className='userActionInput' type="text" name="" id="" placeholder='Устроиться на работу'/>
                </div>
                <div className='contentUserBodyMediumAction1'>
                    <span className='actionText'>Дата</span>    
                    <input className='userActionInputMedium' type="text" name="" id="" placeholder='12.07.2023'/>
                </div>
                <div className='contentUserBodyMediumAction2'>
                    <span className='actionText'>Время</span>
                    <input className='userActionInputMedium' type="text" name="" id="" placeholder='15:45'/>
                </div>
                <hr width='90%'/>
                <div className='contentUserBodySmall'>
                    <span className='actionText'>Количество баллов</span>
                    <input className='userActionInputSmall' type="text" name="" id="" placeholder='50'/>
                </div>
            </div>
        </div>
    )
}

export default UserAction