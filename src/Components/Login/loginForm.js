import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { loginUser } from "../../Api/User"
import { storageSave } from "../../Utils/storage"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { STORAGE_KEY_USER } from "../../const/storageKey"


const Login = () => {

  const { register, handleSubmit,} = useForm()

  const{user, setUser} =useUser()

  const navigate = useNavigate()


  // local State
  const [loading,setLoading ] = useState(false);
  const [apiError, setApiError] = useState(null)

//Side Effects
useEffect(() => {
 if (user !== null) {
  navigate("translation")
 }
}, [user, navigate])

  const onSubmit = async (username) => {  
    setLoading(true)
    const [error, userResponse] = await loginUser(username)
    if (error !==null) {
      setApiError(error)
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse)
      setUser(userResponse)
    }
    setLoading(false)
  }
  //console.log(errors);

  // const errorsMessage = (() => {
  //   if (!errors.username) {
  //     return null
  //   }

  //   if (errors.username.type === "required") {
  //     return <span>Username is required!</span>
  //   }

  //   if (errors.username.type === "minLength") {
  //     return <span>Username is too short!</span>
  //   }

  // })

  return (
    <>

      <section>

        <h1>Lost in Translation</h1>
        <p>Get Started</p>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            type="text"
            {...register("username")}
            id="username"
            autoComplete="off"
            placeholder="What's Your Name?"
            required
            minLength={3}
          />
          <button type="submit">Sign In</button>
          {loading && <p>Logging in...</p>}
          {apiError && <p>{apiError} </p>}
        </form>
      </section>
    </>
  )
}

export default Login