import styles from './FriendList.module.css';

import FriendListItem  from "./FriendListItem";
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
	{friends.map(friend => {
        return (
            <li className={styles.item} key={friend.id}>
    <FriendListItem 
    name={friend.name}
    avatar={friend.avatar}
    isOnline={friend.isOnline}
     />
</li>
        );
    })}
</ul>  
  );
};

export default FriendList



