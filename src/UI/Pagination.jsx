import './Pagination.css'
import Left from './icons/Left'
import Right from './icons/Right'

const Pagination = () => {
    return(
        <div className='containerPagination'>
            <span><Left/></span>
            <span className='number1'>1</span>
            <span className='number'>2</span>
            <span className='number'>3</span>
            <span className='number'>...</span>
            <span className='number'>16</span>
            <span className='number'>17</span>
            <span className='number'>18</span>
            <span><Right/></span>
        </div>
    )
}

export default Pagination