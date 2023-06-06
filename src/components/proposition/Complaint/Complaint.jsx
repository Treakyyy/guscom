import './Complaint.css'
import Header from '../../../UI/Header'
import Menu from '../../../UI/Menu'
import Close from '../../../UI/icons/Close'

const Complaint = () => {
    return(
        <div>
            <Header/>
                <div className='containerComplaint'>
                    <Menu/>
                    <div className='containerContentComplaint'>
                        <div className='contentComplaint'>
                            <h2 className='Complaint'>Жалоба</h2>
                            <span className='userComplaint'>Сергей Абрамов <Close/></span>
                        </div>
                        <div className='descriptionContainerComplaint'>
                            <div>
                                <h5 className='descriptionComplaint'>Описание</h5>
                                <div className='messageComplaint'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut vero. Quia libero temporibus maiores officia delectus vel quod magnam ex possimus odit unde illo, molestias perspiciatis autem suscipit itaque accusamus architecto officiis rem consequuntur quo, at deleniti. Natus consequatur reprehenderit distinctio eligendi maiores aliquam, voluptate ea. Perspiciatis aspernatur incidunt corporis accusantium non ab placeat quod minima sequi mollitia. Debitis similique tenetur unde sunt officiis hic consectetur cum ab modi in! Consequatur aliquid, cum corporis, numquam repudiandae hic veritatis officia exercitationem earum ipsa, voluptates suscipit quasi eius veniam? Blanditiis quisquam illum totam harum, soluta optio consequuntur a vero nisi accusamus perspiciatis iusto tempora, mollitia id veritatis laudantium, expedita saepe laboriosam voluptate. In ut nobis nam labore, vero natus blanditiis veritatis aliquam dicta, architecto, asperiores laborum assumenda. Nulla deserunt cumque, a suscipit minima est accusantium harum quidem illum magni eos ratione doloribus architecto sunt. Cum temporibus repellat corporis! Tenetur, cupiditate obcaecati.</div>
                            </div>
                            <div className='buttonContatinerComplaint'>
                                <button className='buttonComplaintRed'>Ответить</button>
                                <button className='buttonComplaintBlack'>Отклонить</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Complaint