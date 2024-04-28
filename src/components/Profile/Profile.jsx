import styles from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={avatar} alt={tag} />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.dataName}>Followers</span>
          <span className={styles.number}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.dataName}>Views</span>
          <span className={styles.number}>{views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.dataName}>Likes</span>
          <span className={styles.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
