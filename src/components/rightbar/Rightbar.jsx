import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
<div className="birthdateContainer">
  <img src="assets/gift.png" alt="" className="birthdayImg" />
  <span className="birthdayText"><b>Pola Foster</b> and<b> 3 other friends</b> have a birthday today</span>
</div>
<img src="assets/ad.png" alt="" className="rightbarAd" /> 
<h4 className="rightbarTitle">Online Friends</h4>
<ul className="rightbarFriendList">
  {Users.map(u=>(
    <Online key={u.id} user={u} />
  ))}
</ul>
</>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
          </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
  <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
  <span className="rightbarFollowingName">John Carter</span>
</div>
<div className="rightbarFollowing">
  <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
  <span className="rightbarFollowingName">John Carter</span>
</div>
<div className="rightbarFollowing">
  <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
  <span className="rightbarFollowingName">John Carter</span>
</div>
      </div>
      
      </>
    )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightBar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}
