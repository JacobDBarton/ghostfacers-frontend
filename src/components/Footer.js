import '../styles.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function Footer(props){
    return (
        <div className='footer'>
            <div className='creators'>
                <div>
                Brigitte Quintero
                </div>
                <div>
                <a href="https://www.linkedin.com/in/brigitte-quintero/"><FaLinkedin/></a>
                <a href="https://github.com/gigi-coding"><FaGithub/></a>
                </div>
            </div>
            <div className='creators'>
                <div>
                Jacob Barton
                </div>
                <div>
                <a href="https://www.linkedin.com/in/jacob-barton/"><FaLinkedin/></a>
                <a href="https://github.com/JacobDBarton"><FaGithub/></a>
                </div>
            </div>
        </div>
    )
}


export default Footer