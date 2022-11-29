import { useUser } from "../../context/UserContext"

const { NavLink } = require("react-router-dom")

const Navbar = () => {

    const { user } = useUser()

    return (
        <nav>
            <div className="titles">
                {user !== null &&
                    <ul className="titles">
                        <li className="titles">Lost In Translation</li>
                    </ul>
                }
            </div>


            <div className="Navbar">
                {user !== null &&
                    <ul className="Navbar">
                        <li>
                            <NavLink to="/translation">translation</NavLink>
                        </li>
                        <div>
                            <li className="NavbarProfile">
                                <NavLink to="/profile" className="profileTitle">Profile</NavLink>
                            </li>
                        </div>
                    </ul>
                }

            </div>

        </nav>

    )

}
export default Navbar