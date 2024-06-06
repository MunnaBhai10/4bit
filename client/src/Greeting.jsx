function Greeting(prop){
    const Welcome=<h2 className="welcome">Welcome {prop.username} </h2>
    const login=<h2 className="login">Please Login to continue </h2>
return (
    prop.isLoggedin ? Welcome : login
)
}
export default Greeting