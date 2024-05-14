import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';



export default function Topbar() {

  const {user}= useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">Fang</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
       
          
      
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <HomeRoundedIcon sx={{ fontSize: 30 }} />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ForumRoundedIcon sx={{ fontSize: 30 }} />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <EventRoundedIcon sx={{ fontSize: 30 }} />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <PeopleRoundedIcon sx={{ fontSize: 30 }} />
            <span className="topbarIconBadge">3</span>
        </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbarImg"/>
        </Link>
      </div>
    </div> 
  );
}