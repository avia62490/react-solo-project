import profile_pic from "../images/profile_pic.jpeg"

export default function Portrait() {
    return (
        <img src={profile_pic} className="profile_pic" alt="profile" />
    );
}