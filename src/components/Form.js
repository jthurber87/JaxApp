import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'

export default function Forms() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        urgency: '',
        icon: '',
        // user: user._id
    })
    const [iconSearch, setIconSearch] = useState('apple')
    const [icons, setIcons] = useState([])

    // Load icons to default "Apple"
    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.svgapi.com/v1/SxlFUKwk51/list/?search=${iconSearch}&limit=50`)
                .then(res => res.json())
                .then(data => setIcons(data.icons))
        }
        fetchData()
    }, [iconSearch])

    const handleIconSearch = (e) => {
        e.preventDefault()
        setIconSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.name === '' || formData.icon === '') {
            alert('Please fill out all fields')
        } else {

            try {
                await axios.post('/requests/new', formData)
                    .then(navigate('/'))
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <Form className="form" onSubmit={handleSubmit}>
            <h1>Add a Request</h1>
            <Form.Group className="mb-3" >
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Food, Water, Bathroom..." onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Icon:</Form.Label>
                <Form.Control type="text" placeholder="Search for an icon..." onChange={handleIconSearch} />
            </Form.Group>
            <div id="iconList">
                {icons.map((icon, idx) => {
                    return (
                        <img key={idx} src={icon.url} alt={icon.name} width="100px" onClick={(e) => { setFormData({ ...formData, icon: icon.url }); $('.selected').removeClass('selected'); e.target.classList.add('selected') }
                        } />
                    )
                })}
            </div>
            <Button variant="primary" type="submit">
                Create Request
            </Button>
        </Form>
    )
}