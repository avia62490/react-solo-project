import github_icon from "../images/github_icon.svg"
import linkedin_icon from "../images/linkedin_icon.svg"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/avia62490" target="_blank" rel='noreferrer'>
                <img src={github_icon} className="github_icon" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/alex-via/" target="_blank" rel='noreferrer'>
                <img src={linkedin_icon} className="linkedin_icon" alt="github" />
            </a>
        </div>
    );
}