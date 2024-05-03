import "./sidebar.css"
import  FeedIcon  from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import { Users} from "../../dummyData"
import CloseFriend from "../closefriend/CloseFriend";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FeedIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
              </li>
              <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
