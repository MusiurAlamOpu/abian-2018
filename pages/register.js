import validator from "../formValidators/registerFormValidation";
import { useState, useEffect } from "react";
import Link from "next/link";
import FormStyles from "../styles/modules/form.module.scss";


const Register = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
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
            <h2>Register</h2>

            <form className={FormStyles.formBox}>
                <input onChange={handleOnChange} name="username" type="text" placeholder="Username" className={FormStyles.inputBox} />
                {errorMessage.username && <p>{errorMessage.username}</p>}

                <input onChange={handleOnChange} name="email" type="email" placeholder="Email address" className={FormStyles.inputBox} />
                {errorMessage.email && <p>{errorMessage.email}</p>}

                <input onChange={handleOnChange} name="password" type="password" placeholder="Password" className={FormStyles.inputBox} />
                {errorMessage.password && <p>{errorMessage.password}</p>}

                <button onClick={handleOnSubmit} className="btn-primary">Sign Up</button>
            </form>

            <p>Already have account? <Link href="/login" passHref>Login now!</Link></p>
        </div>
    )
}

export default Register;