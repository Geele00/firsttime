import { STORAGE_KEY_USER } from "../../const/storageKey";
import { useUser } from "../../context/UserContext";
import { stroageDetlete } from "../../Utils/storage"
import { translationClearHistory } from "../../Api/Translations"


const ProfileActions = () => {

    const { user, setUser } = useUser();

    const handleLogoutClick = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            stroageDetlete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure that you want to clear your history?')) {
            return
        }

        const [clearError] = await translationClearHistory(user.id)

        if (clearError !== null) {
            return
        }

        //Empties the translations array
        const EmptiesUser = {
            ...user,
            translations: []
        }
        setUser(EmptiesUser)
    }







    return (
        <ul className="button">
            <li><button onClick={handleClearHistoryClick}>Clear history</button></li>


            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions