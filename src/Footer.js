import './styles.css';
import { FaGithubSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer(props){
    return (
        <div className='footer'>
            <div className='gigi'>
                Brigitte Quintero
                <a href="https://www.linkedin.com/in/brigitte-quintero/"><FaLinkedin/></a>
                <a href="https://github.com/gigi-coding"><FaGithub/></a>
            </div>
            <div className='jacob'>
                Jacob Barton
                <a href="https://www.linkedin.com/in/jacob-barton/"><FaLinkedin/></a>
                <a href="https://github.com/JacobDBarton"><FaGithub/></a>
            </div>
        </div>
    )
}


export default Footer