import './Controls.css'
import Input from './Input'
import Pagination from './Pagination'

 const Controls = () => {
    return(
        <div className='controls'>
            <Pagination/>
            <Input/>
            <button className='btn'>Добавить</button>
        </div>
    )
 }

 export default Controls