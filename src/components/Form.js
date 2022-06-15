import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export default function Forms() {
    const [formData, setFormData] = useState({
        name: '',
        urgency: '',
        icon: ''
    })

    const [iconSearch, setIconSearch] = useState('apple')

    const [icons, setIcons] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://api.svgapi.com/v1/SxlFUKwk51/list/?search=${iconSearch}&limit=10`)
                .then(res => res.json())
                .then(data => setIcons(data.icons))
        }
        fetchData()
    }, [iconSearch])

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const handleIconSearch = (e) => {
        e.preventDefault()
        setIconSearch(e.target.value)
    }


    return (
        <Form className="form">
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
                {icons.map(icon => {
                    return (
                        <img src={icon.url} alt={icon.name} width="100px" onClick={() => setFormData({ ...formData, icon: icon.url })} />
                    )
                })}
            </div>
            <Button variant="primary" type="submit">
                Create Request
            </Button>
        </Form>
    )
}