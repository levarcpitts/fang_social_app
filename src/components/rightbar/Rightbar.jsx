import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Add, Remove} from "@mui/icons-material"


export default function Rightbar({ user }) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user?.id)
  );


  useEffect(()=> {
    const getFriends = async ()=>{
      try{
        const friendList = await axios.get("/users/friends/" + user._id)
        setFriends(friendList.data)
      }catch(err){
        console.log(err)
      }
    }
    getFriends();
  }, [user])

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  const HomeRightbar = () => {
    return(
      <>
  <div className="rightBarTitle">Events</div>
  <div class="eventsToday">
        <p><strong>Levar Pitts</strong> and 3 others have a birthday today</p>
        <br></br>
        <p><strong>3 Events</strong> are happening today</p>
    </div>
    <div class="eventsCalendar">
      <p>May 2023</p>
        <table class="calendar">
            <tr>
                <th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th>
            </tr>
            <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td>
            </tr>
            <tr>
                <td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td>
            </tr>
            <tr>
                <td>15</td><td>16</td><td>17</td><td class="highlight">18</td><td>19</td><td>20</td><td>21</td>
            </tr>
            <tr>
                <td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td>
            </tr>
            <tr>
                <td>29</td><td>30</td><td>31</td><td></td><td></td><td></td><td></td>
            </tr>
        </table>
    </div>
    <div class="eventsByHour">
        <div class="eventItem">
            <p><strong>FAMU Golf Tournament</strong></p>
            <p>Carolina Lakes Golf Club</p>
        </div>
    </div>
{/* <h4 className="rightbarTitle">Online Friends</h4> 
 <ul className="rightbarFriendList"> 
  {Users.map(u=>( 
     <Online key={u.id} user={u} />
   ))}
</ul> */}
</>
    )
  }

  const ProfileRightBar = () => {

    return(
      <>
         {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
      <div className="rightbarTitle"> User information</div>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Graduation Year:</span>
          <span className="rightbarInfoValue">{user.graduation_year}</span>
          </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
      {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
      </div>
      
      </>
    )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          { user ? <ProfileRightBar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}
