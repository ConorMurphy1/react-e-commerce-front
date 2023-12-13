import React, { useState } from "react";
import axios from 'axios'

axios.defaults.baseURL = "http://react-e-commerce-back.test/api";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        try {
            const user = { name, email, password };
            const response = await axios.post("/user-store", user);
            console.log(response.data);
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Componet</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="form-control"
                placeholder="name"
            />
            <br />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="form-control"
                placeholder="email"
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="form-control"
                placeholder="password"
            />
            <br />
            <button onClick={signUp} className="btn btn-primary">
                Sign Up
            </button>
        </div>
    );
}

export default Register;
