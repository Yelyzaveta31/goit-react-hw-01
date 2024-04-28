import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={styles.image} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p
        className={clsx({
          [styles.isOnline]: isOnline,
          [styles.isOffline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
