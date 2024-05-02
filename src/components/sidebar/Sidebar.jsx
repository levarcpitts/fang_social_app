import "./sidebar.css"
import  FeedIcon  from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';

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
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Alexa Foe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Regina Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Melissa Crow</span>
            </li>
            <li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li><li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li><li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li><li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li><li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li><li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li><li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li><li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li><li className="sidebarFriend">
  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">Jane Doe</span>
</li>
          </ul>
      </div>
    </div>
  )
}
