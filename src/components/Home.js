import React from "react";
import bkgd from "../images/home.gif";
import dcphoto from "../images/dcphoto.jpg";

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
                        <img src={dcphoto} alt="My Picture" className="custom-dcphoto rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                        <div className="text-lg flex flex-col font-black justify-center">
                            <h1 className="text-5xl mb-2" id="custom-header">&lt;Hello there, I'm David 👋&gt;</h1>
                            <h3 className="text-3xl mb-2">Your Friendly-Neighborhood Web Developer</h3>
                        </div>
                    </section>
                    <br></br>
                    {/* Background */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <h2 className="text-5xl mb-2">&lt;Background&gt;</h2>
                            <p className="text-2xl">Full-stack web developer using a background in amateur graphic design to focus on front-end development.
                            Born and raised in Orlando, FL, I've recently graduated from UCF's Coding Bootcamp course, and I'm more than prepared to assist
                            your web team with whatever challenge your clients may present! I've become educated in HTML, CSS, JavaScript, Node.JS, React.JS, and other
                            programming languages that'll assist me in any future web development jobs.</p>
                        </div>
                    </section>
                    <br></br>
                    {/* My Motivation */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <h2 className="text-5xl mb-2">&lt;My Motivation&gt;</h2>
                            <p className="text-2xl">What drives me to pursue a career in coding is the opportunity to create a life for myself in which I can practice
                            doing what I love without having to worry daily about my ability to take care of my family financially in these trying times.</p>
                        </div>
                    </section>
                    <br></br>
                    {/* Why Should You Hire Me? */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <h2 className="text-5xl mb-2">&lt;Why Should You Hire Me?&gt;</h2>
                            <p className="text-2xl">I believe you should consider hiring me for
                            (1) the fresh perspective I'd bring to the team,
                            (2) my newly-acquired coding skills I've worked painstakingly hard on to obtain,
                            (3) my organization skills, and 
                            (4) my ability to collaborate kindly, timely, and efficiently in a team.</p>
                        </div>
                    </section>
                    <br></br>
                    {/* My Long Term Career Goals */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        <div className="text-lg flex flex-col justify-center">
                            <h2 className="text-5xl mb-2">&lt;My Long Term Career Goals&gt;</h2>
                            <p className="text-2xl">I'd like to build a lifetime career in creating aesthetically-pleasing sites that utilize strategic placement of content and intuitive UI
                            to make for an accurate and fantastical representation of each client's dream website that is simple and easy to understand.
                            I aspire to work my way up from a beginner front-end web developer to a project manager within the next 8-10 years,
                            or sooner depending on your the opportunities that present themselves.</p>
                        </div>
                    </section>
                    {/* Space for footer */}
                    <br></br>
                    <br></br>
                </div>
            </main>
        </div>
    );
};