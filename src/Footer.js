import './styles.css'
import { Link } from 'react-router-dom'

function Footer(props){
    return (
        <div className='footer'>
            <div className='gigi'>
                <p>Brigitte Quintero</p>
                <a href="https://www.linkedin.com/in/brigitte-quintero/"></a>
                <a href="https://github.com/gigi-coding"></a>
            </div>
            <div className='jacob'>
                <p>Jacob Barton I WANT THESE LINKS TO WORK!</p>
                <Link to={'"https://www.linkedin.com/in/jacob-barton/"'}/>
                {/* <a href="https://www.linkedin.com/in/jacob-barton/"></a> */}
                {/* <a href="https://github.com/JacobDBarton"></a> */}
            </div>
        </div>
    )
}


export default Footer