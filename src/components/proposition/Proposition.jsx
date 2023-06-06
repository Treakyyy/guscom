import './Proposition.css'
import Header from '../../UI/Header'
import Menu from '../../UI/Menu'
import Input from '../../UI/Input'
import Avatar from '../../UI/icons/Avatar'
import { Link } from 'react-router-dom'
import Pagination from '../../UI/Pagination'

const Proposition = () => {
    const arrProposition = [{
        id: 1, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.', date: '11.11.2022', status: 'Активный'
    },
    {
        id: 2, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },{
        id: 3, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },{
        id: 4, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },{
        id: 5, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },{
        id: 6, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },{
        id: 7, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },{
        id: 8, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },{
        id: 9, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },{
        id: 10, img: <Avatar/>, name: 'Плохо работает приложение', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga libero corrupti in.',  date: '11.11.2022', status: 'Активный'
    },
]
    return(
        <div>
            <Header/>
            <div className='containerProposition'>
                <Menu/>
                <div className='containerContentPropositions'>
                    <div className='contentPropositions'>
                        <h2 className='Propositions'>Предложение пользователей</h2>
                    </div>
                    <div className='controlsProposition'>
                        <Pagination/>
                        <Input/>
                    </div>
                    <div className='usersContainerPropositions'>
                        <div className='usersContentPropositions'>
                    <div className='containerHeaderContent'>
                        <div className='contentHeader'>
                            <span>Пользователь</span>
                            <span>Тема</span>
                        </div>
                        <span>Сообщение</span>
                        <div className='contentHeaderData'>
                            <span>Дата</span>
                            <span>Статус</span>
                        </div>
                    </div>
                        {arrProposition.map((user) =>
                                    <div className='containerContent'>
                                        <div className='contentUserHeader'>
                                            <span className='users'>{user.id}{user.img}</span>
                                            <span>{user.name}</span>
                                        </div>
                                        <span className='message'>{user.message}</span>
                                        <div className='contentUserHeader'>
                                            <span>{user.date}</span>
                                            <span>{user.status}</span>
                                        </div>
                                    </div>
                                )}
                                <div>
                            </div>
                        </div>
                    </div>
                    <div className='routerBtn'>
                        <Link to='/proposition/createcomplaint'><button className='btnCreateComplaint'>Создать жалобу</button></Link>
                        <Link to='/proposition/complaint'><button className='btnComplaint'>Жалобы</button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Proposition