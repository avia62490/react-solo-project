import email from "../images/email.svg"

export default function Body() {
    return (
        <div className="body">
            <h1 className="body--name">Alex Via</h1>
            <h3 className="body--job_title">Full Stack Developer</h3>
            <button className="email_button">
                <img src={email} className="email_icon" alt="email" width="16px"/>
            </button>
        </div>
    );
}