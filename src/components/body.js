import email from "../images/email.svg"

export default function Body() {
    return (
        <div className="body">
            <h1 className="body--name">Alex Via</h1>
            <h3 className="body--job_title">Full Stack Developer</h3>
            <a href="mailto:alexandervia@gmail.com?subject=solo project">
                <button className="email_button">
                <img src={email} className="email_icon" alt="email" width="16px"/>
                <h6>Email</h6>
            </button>    
            </a>
            <div className="body--about">
            <h2>About</h2>
                <h6>I am a full stack developer eager to work on exciting projects in a team environment. I enjoy solving coding problems with creative solutions in order to create finished products that run smoothly and are aesthetically pleasing.</h6>
            </div>
            <div className="body--interests">
                <h2>Interests</h2>
                <h6>Camping/ hiking. Nature. Yoga. Video games. DnD. Simpsons. Star Wars. Bike riding.</h6>
            </div>
        </div>
    );
}