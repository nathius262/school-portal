'use client';

import { useState } from "react";

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Handle form submission logic here
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {/* // firstName, lastName, email, fields and submit button go here */}

            <input className="form-control mb-3 py-2 px-1" type="text" name="firstName" onChange={handleChange} placeholder="First Name" required />
            <input className="form-control mb-3 py-2 px-1" type="text" name="lastName" onChange={handleChange} placeholder="Last Name" required />
            <input className="form-control mb-3 py-2 px-1" type="email" name="email" onChange={handleChange} placeholder="Email Address" required />
            <button className="btn btn-outline-primary w-100 py-2" type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        </form>
    );
}