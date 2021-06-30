import React from 'react';

import { 
    Container, 
    Jumbotron,
    Card,
    Row, Col,
    Navbar, 
    Nav,
    Button,
    Alert
  } from 'react-bootstrap';
  
class Home extends React.Component {
  
    render() {

        return(
            <>
                <Navbar bg="dark" variant="dark" className="p-3">
                  <Navbar.Brand>
                      Discord Spam Bot
                  </Navbar.Brand>
                  <Nav className="justify-content-center" activeKey="/">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/scrape">Scraper</Nav.Link>
                    <Nav.Link href="/spam">Spammer</Nav.Link>
                  </Nav>
                </Navbar>
        
                <Container className="p-5">
                    <Jumbotron className="p-5 bg-light rounded">
                        <h2>Getting Started</h2>
                        <p>This is a Discord spam bot tool. It has two main scripts:</p>

                        <Row>
                            <Col>
                                <Card className="p-5">
                                    <Card.Body>
                                        <Card.Title><a href="/scrape">Scraper Tool</a> [✔️]</Card.Title>
                                        <Card.Subtitle>Scraping User IDs from Discord server</Card.Subtitle>
                                        <hr/>
                                        <p>
                                            This tool will make a POST request to <code>/api/scrape</code> and run <code>/scripts/scrapeMembers.py</code>, and will give you:<br/><br/>
                                            <Button className="mb-2" variant="success" disabled>200 - OK!</Button> <br/>
                                            <Button className="mb-2" variant="danger" disabled>400 - Bad Request</Button> <br/>
                                            <Button className="mb-2" variant="danger" disabled>500 - Internal Server Error</Button> <br/>
                                            <span>If all goes well, you can download <code>users.txt</code> and proceed to the spammer tool. Otherwise, check your console.</span>
                                        </p>
                                        <Alert variant="danger">
                                            <strong>🐞 Bug Warning:</strong> Inputting an invalid guild ID (w/ correct credentials) causes the scraper to hang, necessitating a refresh.
                                        </Alert>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="p-5">
                                    <Card.Body>
                                        <Card.Title><a href="/spam">Spammer Tool</a> [✔️]</Card.Title>
                                        <Card.Subtitle>Sending mass-message to retrieved User IDs</Card.Subtitle>
                                        <hr/>
                                        <p>
                                            This tool will make a POST request to <code>/api/spam</code> and run <code>/scripts/messageUser.js</code>, and will give you:<br/><br/>
                                            <Button className="mb-2" variant="success" disabled>200 - OK!</Button> <br/>
                                            <Button className="mb-2" variant="danger" disabled>500 - Internal Server Error</Button> <br/>
                                            <span>This script takes a while to complete, especially if your list is large, so please be patient! If it crashes, check your console.</span>
                                        </p>
                                        <Alert variant="warning">
                                            <strong>🦗 Bug Advisory:</strong> This script will not validate your credentials, and will not output any error. Some spam workers may also hang, but the rest will continue individually.
                                        </Alert>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Jumbotron>
                </Container>
            </>
        )

    }
  }
  
  export default Home;