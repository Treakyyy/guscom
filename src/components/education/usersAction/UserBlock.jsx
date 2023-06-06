import './UserBlock.css'

const UserBlock = () => {
    return(
        <div className='block'>
            <div className='descriptionUser'>
                <div className='contentUserBody'>
                    <span className='blockText'>Название</span>
                    <input className='userInput' type="text" name="" id="" placeholder='Как СТАВИТЬ ЦЕЛИ так, чтобы они РЕАЛИЗОВАЛИСЬ?'/>
                </div>
                <div className='contentUserBody'>
                    <span className='blockText'>Описание</span>
                    <input className='userInput' type="text" name="" id="" placeholder='Как СТАВИТЬ ЦЕЛИ так, чтобы они РЕАЛИЗОВАЛИСЬ?'/>
                </div>
                <div className='contentUserBody'>
                    <span className='blockText1'>Преимущества</span>
                    <div className='moreUserInput'>
                        <input className='userInput' type="text" name="" id="" placeholder='Как ставить цели и добиваться их?'/>
                        <input className='userInput' type="text" name="" id="" placeholder='Как ставить цели и добиваться их?'/>
                        <input className='userInput' type="text" name="" id="" placeholder='Как ставить цели и добиваться их?'/>
                        <input className='userInput' type="text" name="" id="" placeholder='Как ставить цели и добиваться их?'/>
                        <button className='userBtn'>Добавить</button>
                    </div>
                </div>
                <div className='contentUserBody'>
                    <span className='blockText'>Ссылка</span>
                    <input className='userInput' type="text" name="" id="" placeholder='https://www.youtube.com/watch?v=wb_BLBl-FTM'/>
                </div>
            </div>
    </div>
    )
}

export default UserBlock