import profilePic from "./assets/myPicture.jpeg"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" ></img>
            <h2 className="card-title"> Zak Code</h2>
            <p className="card-text">I study in seconde year in dev </p>
        </div>
    );
}
export default Card