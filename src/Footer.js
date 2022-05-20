import './styles.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer(props){
    return (
        <div className='footer'>
            <div className='creators'>
            <div> This is a collaborative Project between:</div>
            <div>
                Brigitte Quintero
                <a href="https://www.linkedin.com/in/brigitte-quintero/"><FaLinkedin/></a>
                <a href="https://github.com/gigi-coding"><FaGithub/> </a>
            </div>
            <div>
                Jacob Barton
                <a href="https://www.linkedin.com/in/jacob-barton/"><FaLinkedin/></a>
                <a href="https://github.com/JacobDBarton"><FaGithub/></a>
            </div>
            </div>
        </div>
    )
}


export default Footer