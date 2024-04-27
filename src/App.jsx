import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";

const App = () => {
  return (
    <>
      <Profile
      {...userData}
      />
  <FriendList friends={friends} 
     />
    </>
  );
};

export default App;
