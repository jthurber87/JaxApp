import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.email === '' || formData.password === '') {
            alert('Please fill out all fields')
        } else {

            try {
                await axios.post('/users/register', formData)
                    .then(res => {
                        console.log(res)
                        if (res.data.success === true) {
                            alert("Registered successfully!")
                            navigate('/login')
                        } else {
                            alert("Email already in use")
                        }
                    })
            } catch (err) {
                console.log("err: " + err)
            }
        }
    }

    return (
        <Form className="form" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <Form.Group className="mb-3" >
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </Form.Group>
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