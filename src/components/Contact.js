import React from 'react';
import emailjs from 'emailjs-com'
import {Container,Row,Col,Form} from 'react-bootstrap';
import "./Contact.css"
const Contact=()=>{

  const onSubmitHandler=(e)=>{
  e.preventDefault();

  emailjs.sendForm(process.env.REACT_APP_EMAIL_ID, process.env.REACT_APP_EMAIL_TEMPLATE, e.target, process.env.REACT_APP_EMAIL_USERID)
    .then((result) => {
    alert('Your message has been sent successfully. We will contact you soon.');

    }, (error) => {
      alert('Your message is error, wait a minute');
        console.log(error.text);
    });
    e.target.reset()
  }
  return(
    <div className="pages">
        <div className="section-title">
            <div className="main-title">
                <div className="title-main-page">
                    <h4>Let's <span className="purple">Talk</span></h4>
                </div>
            </div>
        </div>
        <Container fluid>


          <Row className="justify-content-md-center py-5 hello">
          <Col xs={12} md={8} lg={8}>
           <Form onSubmit={onSubmitHandler}>
              <Form.Row className="hello">
                  <Form.Group controlId="formGridName" className="col-sm-12 col-md-6 hello1">
                      <Form.Control
                          type="text"
                          placeholder="Name"
                          name="name"

                      />
                  </Form.Group>

                  <Form.Group controlId="formGridEmail" className="col-sm-12 col-md-6 hello2">
                      <Form.Control
                          type="email"
                          placeholder="email@gmail.com"
                          name="email"

                      />
                  </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridSubject">
                  <Form.Control
                      type="text"
                      placeholder="What is the subject?"
                      name="subject"

                  />
              </Form.Group>

              <Form.Group controlId="exampleForm.message">
                  <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Message"
                      name="message"

                  />
              </Form.Group>

              <button className="bt-submit" type="submit" value="send">
                  Send Message
              </button>

              </Form>
              </Col>

              </Row>
              </Container>
      </div>

  )
}
export default Contact
