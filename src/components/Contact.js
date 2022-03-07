import React from "react";
import bkgd from "../images/contact.gif";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Contact () {
    return (
        <div>
            <img src={bkgd} alt="Contact Me" className="custom-img absolute object-cover w-full h-full"></img>
            <br></br>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                    <br></br>
                    <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <br></br>
                    <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label htmlFor='message'>Message</Form.Label>
                    <br></br>
                    <Form.Control id='message' name='message' as="textarea" row="3" value={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <br></br>

                <Button className='d-inlineblock' variant='primary' type='submit' disabled={this.state.disabled}>
                    Send
                </Button>

                {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p>}
                {this.state.emailSent === false && <p className='d-inline err-msg'>Error: Email could not be sent</p>}
            </Form>
        </div>

    );
}