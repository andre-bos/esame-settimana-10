import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function FormRicerca() {

    const [queryRicerca, setQueryRicerca] = useState('')
    const aggiornaQueryRicerca = (eve) => {
        setQueryRicerca(eve.target.value)
    }
    const navigate = useNavigate()
    const handlePressEnterKey = (eve) => {
        if(eve.key === 'Enter') {
            eve.preventDefault()
            navigate(`/results/${queryRicerca}`)
        }
    }

    console.log(queryRicerca)

  return (
    <>
        <Container>


            <Row className='d-flex justify-content-center'>
                <Col xs='auto'>
                    <Form.Control
                    type="text"
                    placeholder="Inserisci la città"
                    aria-describedby="Inserisci la città"
                    value={queryRicerca}
                    onChange={aggiornaQueryRicerca}
                    onKeyDown={handlePressEnterKey}
                    />
                </Col>

                <Col xs='auto'>
                    <Button variant="dark" onClick={() => {navigate(`/results/${queryRicerca}`)}}>Invia</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}
