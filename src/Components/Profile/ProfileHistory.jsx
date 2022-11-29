import { useUser } from "../../context/UserContext";
import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem";

const ProfileHistory = () => {
  const { user } = useUser();


  const translationList = user.translations.map((translation, index) =>
    <ProfileOrderHistoryItem key={index + '-' + translation} translation={translation} />
  );

  return (
    <div>
      <h4 className="history"> Your translation history </h4>
      <ul>{translationList}</ul>
    </div>
  );
};
export default ProfileHistory;
