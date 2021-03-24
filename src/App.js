import Profile from "./components/Profile";
import user from "./user.json";

function App({ user }) {
  return (
    <>
      <Profile user={user} />
    </>
  );
}

export default App;
