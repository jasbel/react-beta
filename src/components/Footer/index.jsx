import { Container, Row, Col} from 'reactstrap'

const Footer = () => {

    const copyrightText = "Copyright 2021 © Atlas Connect."

    return (
        <footer className="footer">
            <Container fluid={true}>
                <Row>
                    <Col md="12" className="footer__copyright text-center">
                    <p className="mb-0">{copyrightText}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
