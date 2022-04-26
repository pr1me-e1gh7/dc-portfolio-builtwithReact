import React from "react";
import bkgd from "../images/home.gif";
import dcphoto from "../images/dcphoto.jpg";

const iframe = '<iframe src="https://api.badgr.io/public/assertions/hdE4dj5XS_inrwLAQ-8F2Q?embedVersion=1&amp;embedWidth=330&amp;embedHeight=191&amp;identity__email=dcaro1996%40yahoo.com" title="Badge: UCF Coding Boot Camp (Full-Stack Web Development)[Full-Time]" style="width: 330px; height: 191px; border: 0px;"></iframe>';

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

export default function Home () {
    return (
        <div>
            <img src={bkgd} alt="Orlando" className="custom-img absolute object-fill w-full h-full"></img>
            <main className="relative">
                <div className="p-10 lg:pt48 container mx-auto relative">
                    {/* Space for Nav */}
                    <br></br>
                    {/* My Picture */}
                    <section className="text-black justify-center rounded-lg lg:flex p-5">
                        <img src={dcphoto} alt="David Caro" className="custom-dcphoto rounded mr-8"></img>
                        <div className="text-lg flex flex-col font-black justify-center">
                            <h1 className="text-5xl mb-2" id="custom-header">&lt;Hello there, I'm David 👋&gt;</h1>
                            <h3 className="text-3xl mb-2">Your Friendly-Neighborhood Web Developer</h3>
                        </div>
                        {/* Cert Badge */}
                        <div className="px-5">
                            <Iframe iframe={iframe} />
                        </div>
                    </section>
                    <br></br>
                    {/* My Background */}
                    <section className="custom-section bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <h2 className="text-5xl mb-2">&lt;Skillset&gt;</h2>
                            <p className="text-2xl">Excellent proficiency in CSS, HTML, JavaScript, MERN stack (MongoDB, Express.js, React.js, and Node.js), and Web API’s.
                            I've also received training in MVC (Model-View-Controller), NoSQL/Non-SQL, OOP (Object-Oriented Programming), ORM (Object-Relational Mapping), PWA (Progressive Web App), and SQL (Structured Query Language).
                            I'm currently studying Amazon Web Services, C#, Java, and Python.
                            Typing speed of 65+ WPM at <a href="https://bit.ly/347gwJF" className="custom-link">Expert level</a>.</p>
                        </div>
                    </section>
                    <br></br>
                    {/* Why You Should Hire Me */}
                    <section className="custom-section bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <h2 className="text-5xl mb-2">&lt;Why You Should Hire Me&gt;</h2>
                            <p className="text-2xl">I believe you should consider hiring me for
                            (1) my fresh perspective I'd bring to your team,
                            (2) my constant drive to improve the coding skills I've worked painstakingly hard on to obtain,
                            (3) my meticulous and organized approach to any problem, and 
                            (4) my ability to collaborate kindly, timely, and efficiently in a team.</p>
                        </div>
                    </section>
                    <br></br>
                    {/* Space for footer */}
                    <br></br>
                    <br></br>
                </div>
            </main>
        </div>
    );
};