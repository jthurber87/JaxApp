import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

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
                await axios.post('/users/register', formData)
                    .then(res => {
                        if (res.success === true) {
                            navigate('/login')
                        } else {
                            alert("Failed")
                        }
                    })
                    .then(navigate('/home'))
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
                Register
            </Button>
        </Form >
    )
}