import './Education.css'
import Header from '../../UI/Header'
import Menu from '../../UI/Menu'
import Controls from '../../UI/Controls'
import { Link } from 'react-router-dom'
import Dropdown from '../../UI/Dropdown'

const Education = () => {

    const arrEducation = [{
        id: 1, name: 'Обучение Радислава Гандапаса'
    },
    {
        id: 2, name: 'Обучение Петра Деревенского'
    },{
        id: 3, name: 'Стас Михайлов'
    },{
        id: 4, name: 'Ольга Ильянкина'
    },{
        id: 5, name: 'Катерина Варнава'
    },
]


    return(
        <div>
            <Header/>
            <div className='containerEducation'>
                <Menu/>
                <div className='contentEducation'>
                    <h2 className='headerEducation'>Учебные заведения</h2>
                    <div className='controlsEducation'>
                        <Controls/>
                    </div>
                    <div className='usersContainerEducation'>
                        <div className='usersContentEducation'>
                            <div className='headerContainerEducation'>
                                <span className='name'>Ф.И.О</span>
                                <span>Статус</span>
                            </div>
                                <hr color='grey' width='600px' align='left'/>
                                {arrEducation.map((user) =>
                                    <div className='usersEducation'>
                                        <div className='infoEducation'>
                                            {user.id}
                                            <Link to='/education/user' className='user'>{user.name}</Link>
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

export default Education