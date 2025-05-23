
import './Slide.css'
export default function Slide({img = "../../assets/slide2.png"}){
    return (
        <div className='slide'>
            <img src={img} alt="" />
        </div>
    )

}