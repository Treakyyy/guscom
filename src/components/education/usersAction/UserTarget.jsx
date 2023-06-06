import Pen from '../../../UI/icons/Pen'
import './UserTarget.css'

const UserTarget = () => {
    return(
        <div className='target'>
            <div className='descriptionUser'>
                <div className='containerUserHeader'>
                    <div className='redRectangle'></div>
                    <span className='targetText'>Цель<Pen/></span>
                </div>
                <div className='contentUserBody'>
                    <span className='targetText'>Сфера</span>
                    <input className='userTargetInput' type="text" name="" id="" placeholder='Финансы и инвестиции'/>
                </div>
                <div className='contentUserBody'>
                    <span className='targetText'>Название</span>
                    <input className='userTargetInput' type="text" name="" id="" placeholder='Заработать 1 000 000 рублей '/>
                </div>
                <div className='contentUserBodyMedium1'>
                    <span className='targetText'>Действия</span>    
                    <input className='userTargetInputMedium' type="text" name="" id="" placeholder='Действуй'/>
                </div>
                <div className='contentUserBodyMedium2'>
                    <span className='targetText'>Награды</span>
                    <input className='userTargetInputMedium' type="text" name="" id="" placeholder='Сникерс'/>
                </div>
                <div className='contentUserBodyMedium3'>
                    <span className='targetText'>Дата</span>
                    <input className='userTargetInputMedium' type="text" name="" id="" placeholder='12.07.2023'/>
                </div>
                <hr width='90%'/>
                <div className='contentUserBodySmall'>
                    <span className='targetText'>Количество баллов</span>
                    <input className='userTargetInputSmall' type="text" name="" id="" placeholder='50'/>
                </div>
            </div>
        </div>
    )
}

export default UserTarget