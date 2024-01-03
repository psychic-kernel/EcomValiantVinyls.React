import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";

const ContactForm = () => {

    return(
        <>
            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="firstName">First Name: </Label>
                            <Input id="firstName" name="firstName"/>
                            <Label for="lastName">Last Name: </Label>
                            <Input id="lastName" name="lastName"/>
                            <Label for="phone">Phone: </Label>
                            <Input id="phone" name="phone"/>
                            <Label for="email">Email: </Label>
                            <Input id="email" name="email"/>
                        
                        </FormGroup>
                        
                    </Col>
                </Row>
            </Form>
        </>
    );
}; export default ContactForm;