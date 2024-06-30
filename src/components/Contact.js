import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
import emailjs from '@emailjs/browser';

export const Contact = () =>{
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''     
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    // const validateForm = () => {
    //     const { firstName, lastName, email, phone, message } = formDetails;
    //     return firstName && lastName && email && phone && message;
    //   };

    const sendEmail = async () => {
        try {
          setButtonText('Sending...');

          const templateParams = {
            to_name: process.env.REACT_APP_RECIPIENT_NAME,
            from_firstName: formDetails.firstName,
            from_lastName: formDetails.lastName,
            from_email: formDetails.email,
            from_phone: formDetails.phone,
            message: formDetails.message,
          };
      
          await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID);
      
          setFormDetails(formInitialDetails);
          setStatus({ status: true, message: 'Message sent successfully' });
        } catch (error) {
          console.error('Error sending email:', error);
          setStatus({ status: false, message: 'Something went wrong, please try again later.' });
        } finally {
          setButtonText('Send');
        }
      };
    
      
      const handleSubmit = (e) => {
        e.preventDefault();
        // if (validateForm()) {
            sendEmail();
        //   }
        //    else {
        //     alert("Please fill out all fields.");
        //   }
      };

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit} >
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1"><input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                                </Col>
                                <Col sm={6} className="px-1"><input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                                </Col>
                                <Col sm={6} className="px-1"><input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.status === false ? "danger" : "success" }>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}