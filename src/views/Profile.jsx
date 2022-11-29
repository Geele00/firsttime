import ProfileActions from "../Components/Profile/ProfileAction";
import ProfileHeader from "../Components/Profile/ProfileHeader";
import ProfileHistory from "../Components/Profile/ProfileHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../HOC/withAuth";


const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <h1 className="profileTitle">Profile</h1>
      <ProfileHeader username={user.username.username} />
      <ProfileActions />
      <ProfileHistory translations={user.translations.translations} />
    </>
  );
};
export default withAuth(Profile);
