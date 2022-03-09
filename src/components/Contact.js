import React, { useState } from "react";
import bkgd from "../images/contact.gif";
const FORM_ENDPOINT = "https://public.herotofu.com/v1/a54b8bf0-9fc8-11ec-bdf8-dd9c99f898ec";

export default function Contact () {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div>
                <img src={bkgd} alt="Contact Me" className="custom-img absolute object-cover w-full h-full"></img>
                {/* Space for navbar */}
                <br></br>
                <main className="relative">
                    <div className="p-10 lg:pt48 container mx-auto relative">
                        <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                            <div className="text-lg flex flex-col justify-center">
                                <h2 className="text-5xl mb-2">&lt;Email Sent&gt;</h2>
                                <p className="text-2xl">I'll get back to you as soon asap!</p>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div>
            <img src={bkgd} alt="Contact Me" className="custom-img absolute object-cover w-full h-full"></img>
            {/* Space for navbar */}
            <br></br>
            <main className="relative">
                <div className="p-10 lg:pt48 container mx-auto relative">
                    {/* <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <h2 className="text-5xl mb-2">&lt;Got a Question?&gt;</h2>
                            <p className="text-2xl">Shoot me an Email at
                                <a href="mailto:dcaro1996@yahoo.com" rel="noreferrer" target="_blank" className="hover:text-white" title="Click here to email me from your machine's mail app">
                                    dcaro1996@yahoo.com </a>
                            and I'll do my best to respond in a timely manner.</p>
                        </div>
                    </section> */}
                    <section className="text-black rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                        <h2 className="text-5xl mb-2">&lt;Got a Question?&gt;</h2>
                            <p className="text-2xl">Shoot me an Email using the forms below</p>
                            <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
                                <div className="mb-3 pt-0">
                                    <input type="text" placeholder="Add your Name here" name="name"
                                    className="px-3 py-3 placeholder-black text-black relative bg-white bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                    required />
                                </div>
                                <div className="mb-3 pt-0">
                                    <input type="email" placeholder="Add your contact Email here" name="email"
                                    className="px-3 py-3 placeholder-black text-black relative bg-white bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                    required />
                                </div>
                                <div className="mb-3 pt-0">
                                    <textarea placeholder="Add your Message here" name="message"
                                    className="px-3 py-3 placeholder-black text-black relative bg-white bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                    required />
                                </div>
                                <div className="mb-3 pt-0">
                                    <button
                                        className="bg-green-400 text-black font-bold active:bg-white uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit" >
                                        Send Email
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        </div>

    );
}