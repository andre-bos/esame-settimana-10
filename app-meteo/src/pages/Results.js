import React, { useState, useEffect } from 'react';
import { Container, Col, Image, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { endPointMeteoAttuale } from '../data';
import axios from 'axios';

export default function Results() {

    // Ottengo il nome della città passato dall'input del form tramite URL parametrico
    const { cityname } = useParams()

    // Inizializzo lo stato locale del componente con un oggetto vuoto

    const [datiMeteo, setDatiMeteo] = useState({})

    // Faccio la chiamata fetch con axios all'interno dell'hook useEffect e setto l'oggetto che ottengo nello stato del componente

    useEffect(() => {
        axios.get(`${endPointMeteoAttuale}&q=${cityname}`)
        .then((response) => {
            console.log(response);
            setDatiMeteo(response.data)
        })
        .catch((err) => {
            console.log('Non è stato possibile recuperare i dati', err)
        })
    }, [])


    return (
        <>
          {/* Meteo attuale */}
          <Container className="mt-5">
            <Row className="d-flex flex-row justify-content-center align-items-center">
              <Col>
                <Card className="weather__card">
                  <Row className="d-flex flex-row justify-content-center align-items-center">
                    <Col className="p-3">
                      <h2>{datiMeteo.main.temp.toFixed(1)}&deg;</h2>
                    </Col>
                    <Col className="p-3">
                      <Image src="https://svgur.com/i/oKG.svg" />
                    </Col>
                    <Col className="p-3">
                      <h5>Tuesday, 10 AM</h5>
                      <h3>{datiMeteo.name}<span>, {datiMeteo.sys.country}</span></h3>
                      <span className="weather__description">{datiMeteo.weather[0].description}</span>
                    </Col>
                  </Row>
                  <Row className="weather__status d-flex flex-row justify-content-center align-items-center mt-3">
                    <Col className="p-4 d-flex justify-content-center align-items-center">
                      <Image src="https://svgur.com/i/oHw.svg" />
                      <span>{datiMeteo.main.humidity} %</span>
                    </Col>
                    <Col className="p-4 d-flex justify-content-center align-items-center">
                      <Image src="https://svgur.com/i/oH_.svg" />
                      <span>{datiMeteo.main.pressure} mB</span>
                    </Col>
                    <Col className="p-4 d-flex justify-content-center align-items-center">
                      <Image src="https://svgur.com/i/oKS.svg" />
                      <span>{datiMeteo.wind.speed} km/h</span>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
    
          {/* Previsioni Meteo */}
          <Container className="weather__forecast d-flex flex-row justify-content-center align-items-center mt-3">
            {/* Repeat this block for each forecast day */}
            <Col className="p-4 d-flex flex-column justify-content-center align-items-center">
              <span>Wed</span>
              <Image src="https://svgur.com/i/oJe.svg" />
              <span>13&deg;</span>
            </Col>
            {/* Repeat this block for each forecast day */}
          </Container>
        </>
      );
}
