import github_icon from "../images/github_icon.svg"
import linkedin_icon from "../images/linkedin_icon.svg"

export default function Footer() {
  return (
    <div className="footer">
      <img src={github_icon} className="github_icon" alt="github" />
      <img src={linkedin_icon} className="linkedin_icon" alt="github" />
    </div>
  )
}