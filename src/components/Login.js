import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

export default function Login({ setUser }) {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.email === '' || formData.password === '') {
            alert('Please fill out all fields')
        } else {

            try {
                await axios.post('/users/login', formData)
                    .then(res => {
                        if (res.data.success === true) {
                            setUser(res.data.user);
                            navigate('/');
                        } else {
                            alert("Failed");
                        }
                    })
            } catch (err) {
                console.log("err: " + err)
            }
        }
    }

    return (
        <Form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Form.Group className="mb-3" >
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: " 50%", alignSelf: "center" }}>
                Login
            </Button>
            <Link to="/register" style={{ alignSelf: "center" }}>
                <Button variant="primary" type="none" >
                    Register
                </Button>
            </Link>
        </Form >
    )
}