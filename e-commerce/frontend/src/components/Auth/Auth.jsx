import Login from "./Login"
import Register from "./Register"
import './Auth.css'
import Policy from "../Layout/Policy/Policy"

function Auth() {
    return (
        <section className="account-page">
            <div className="container">
                <div className="account-wrapper">
                    <Login />
                    <Register />
                    
                </div>
            </div>
            <Policy/>
        </section>
    )
}

export default Auth