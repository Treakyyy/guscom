import './Moderators.css'
import Header from '../../UI/Header'
import Menu from '../../UI/Menu'
import Avatar from '../../UI/icons/Avatar'
import Controls from '../../UI/Controls'
import Dropdown from '../../UI/Dropdown'

const Moderators = () => {

    const arrModerators = [{
            id: 1, img: <Avatar/>, name: 'Денис Лебедев'
        },
        {
            id: 2, img: <Avatar/>, name: 'Игорь Петров'
        },{
            id: 3, img: <Avatar/>, name: 'Стас Михайлов'
        },{
            id: 4, img: <Avatar/>, name: 'Ольга Ильянкина'
        },{
            id: 5, img: <Avatar/>, name: 'Катерина Варнава'
        },
    ]

    return(
        <div>
            <Header/>
            <div className='containerModerators'>
                <Menu/>
                <div className='containerContentModerators'>
                    <div className='contentModerators'>
                        <h2 className='moderators'>Модераторы</h2>
                    </div>
                    <div className='controlsModerator'>
                        <Controls/>
                    </div>
                    <div className='usersContainerModerators'>
                        <div className='usersContentModerators'>
                            <div className='headerContainerModerators'>
                                <span className='name'>Ф.И.О</span>
                                <span>Статус</span>
                            </div>
                                <hr color='grey' width='600px' align='left'/>
                                {arrModerators.map((user) =>
                                    <div className='usersModerators'>
                                        <div className='infoModerators'>
                                            {user.id}
                                            {user.img}
                                            {user.name}
                                        </div>
                                        <div className='status'>
                                            <span>Активный</span>
                                            <Dropdown/>
                                        </div>
                                        {/* <hr color='grey' width='900px' align='left'/> */}
                                    </div>
                                )}
                                <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moderators