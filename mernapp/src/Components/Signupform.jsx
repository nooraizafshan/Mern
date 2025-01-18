import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignupForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [error, setError] = useState("");

    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, age }),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || 'Network response was not ok');
            }

            const result = await response.json();
            console.log("User added successfully:", result);
            setError("");
            setName("");
            setAge(0); // Reset age to number 0
            setEmail("");

            // Navigate to another page after successful submission
            navigate('/all'); // Replace '/success' with the desired route

        } catch (error) {
            setError(`There was a problem with the fetch operation: ${error.message}`);
        }
    };

    return (
        <div className='container my-2'>
            {error && <div className='alert alert-danger'>{error}</div>}
            <h2 className='text-center'>Enter data</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Enter Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nameInput" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="emailInput" 
                        aria-describedby="emailHelp" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="ageInput" className="form-label">Age</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="ageInput" 
                        value={age} 
                        onChange={(e) => setAge(Number(e.target.value))} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default SignupForm;
