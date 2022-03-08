import React from "react";
import bkgd from "../images/contact.gif";
// import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contact () {
    return (
        <div>
            <img src={bkgd} alt="Contact Me" className="custom-img absolute object-cover w-full h-full"></img>
            {/* Space for navbar */}
            <br></br>
            <main className="relative">
                <div className="p-10 lg:pt48 container mx-auto relative">
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <h2 className="text-5xl mb-2">&lt;Got a Question?&gt;</h2>
                            <p className="text-2xl">Shoot me an Email at
                                <a href="mailto:dcaro1996@yahoo.com" target="_blank" className="hover:text-white" title="Click here to email me from your machine's mail app">
                                    dcaro1996@yahoo.com </a>
                            and I'll do my best to respond in a timely manner.</p>
                        </div>
                    </section>
                </div>
            </main>

            {/* <div onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor='full-name'>Full Name</label>
                    <br></br>
                    <input id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <br></br>
                    <input id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor='message'>Message</label>
                    <br></br>
                    <input id='message' name='message' as="textarea" row="3" value={this.state.name} onChange={this.handleChange} />
                </div>
                <br></br>

                <Button className='d-inlineblock' variant='primary' type='submit' disabled={this.state.disabled}>
                    Send
                </Button>

                {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p>}
                {this.state.emailSent === false && <p className='d-inline err-msg'>Error: Email could not be sent</p>}
            </div> */}
        </div>

    );
}