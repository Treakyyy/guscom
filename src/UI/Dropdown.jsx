import './Dropdown.css'
import Down from './icons/Down'

const Dropdown = () => {
    return(
        <div class="dropdown">
            <button className='btnStatus'>Выбрать статус<Down/></button>
                <div class="dropdownContent">
                    <label className='selectDropdown'>
                        <input type="checkbox" className='checkbox'/>
                        <span className='fake'></span>
                        <span className='text'>Назначить</span>
                    </label>
                    <label className='selectDropdown'>
                        <input type="checkbox" className='checkbox'/>
                        <span className='fake'></span>
                        <span className='text'>Приостановить</span>
                    </label>
                    <label className='selectDropdown'>
                        <input type="checkbox" className='checkbox'/>
                        <span className='fake'></span>
                        <span className='text'>Удалить</span>
                    </label>
                </div>
        </div>
    )
}

export default Dropdown