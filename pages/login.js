import validator from "../formValidators/loginPageFormValidator";
import { useState, useEffect } from "react";
import Link from "next/link";
import FormStyles from "../styles/modules/form.module.scss";


const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(formData);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(validator(formData));
    }

    useEffect(() => {
        if (Object.keys(errorMessage).length === 0) {
            //api
        }
    }, [errorMessage])
    return (
        <div className={FormStyles.formContainer}>
            <h2>Login</h2>

            <form className={FormStyles.formBox}>
                <input onChange={handleOnChange} name="email" type="email" placeholder="Email address" className={FormStyles.inputBox} />
                {errorMessage.email && <p>{errorMessage.email}</p>}

                <input onChange={handleOnChange} name="password" type="password" placeholder="Password" className={FormStyles.inputBox} />
                {errorMessage.password && <p>{errorMessage.password}</p>}

                <button onClick={handleOnSubmit} className="btn-primary">Login</button>
            </form>

            <p>{`Don't `}have account? <Link href="/register" passHref>Create now!</Link></p>



        </div>
    )
}

export default Login;