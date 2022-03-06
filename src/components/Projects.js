import React from "react";
import bkgd from "../images/projects.gif";
import fourstor from "../images/fourstor-preview.gif"
import codequiz from "../images/code-quiz-preview.gif"
import wthrdash from "../images/weather-dashboard-preview.gif"
import dayplanr from "../images/day-planner-preview.gif"
import gdreadme from "../images/good-readme-gen-preview.gif"
import tpgen from "../images/team-profile-gen-preview.gif"

export default function Project () {
    return (
        <div>
            <img src={bkgd} alt="Projects" className="custom-img absolute object-cover w-full h-full"></img>
            <main className="relative">
                <div className="p-10 lg:pt48 container mx-auto relative">
                    {/* Space for Nav */}
                    <br></br>
                    
                    {/* Fourstor */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        {/* Deployment */}
                        <a href="https://pr1me-e1gh7.github.io/fourstor/" target="_blank">
                            <img src={fourstor} alt="FourStor" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                        </a>
                        {/* Repo */}
                        <div className="text-lg flex flex-col justify-center">
                            <a href="https://github.com/pr1me-e1gh7/fourstor" target="_blank">
                                <h2 className="text-5xl mb-2">&lt;FourStor&gt;</h2>
                            </a>
                        </div>
                    </section>
                    <br></br>

                    {/* Code Quiz */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        {/* Deployment */}
                        <a href="https://pr1me-e1gh7.github.io/code-quiz/" target="_blank">
                            <img src={codequiz} alt="Code Quiz" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                        </a>
                        {/* Repo */}
                        <div className="text-lg flex flex-col justify-center">
                            <a href="https://github.com/pr1me-e1gh7/code-quiz" target="_blank">
                                <h2 className="text-5xl mb-2">&lt;Code Quiz&gt;</h2>
                            </a>
                        </div>
                    </section>
                    <br></br>

                    {/* Weather Dashboard */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        {/* Deployment */}
                        <a href="https://pr1me-e1gh7.github.io/weather-dashboard/" target="_blank">
                            <img src={wthrdash} alt="Weather Dashboard" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                        </a>
                        {/* Repo */}
                        <div className="text-lg flex flex-col justify-center">
                            <a href="https://github.com/pr1me-e1gh7/weather-dashboard" target="_blank">
                                <h2 className="text-5xl mb-2">&lt;Weather Dashboard&gt;</h2>
                            </a>
                        </div>
                    </section>
                    <br></br>

                    {/* Day Planner */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        {/* Deployment */}
                        <a href="https://pr1me-e1gh7.github.io/day-planner/" target="_blank">
                            <img src={dayplanr} alt="Day Planner" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                        </a>
                        {/* Repo */}
                        <div className="text-lg flex flex-col justify-center">
                            <a href="https://github.com/pr1me-e1gh7/day-planner" target="_blank">
                                <h2 className="text-5xl mb-2">&lt;Day Planner&gt;</h2>
                            </a>
                        </div>
                    </section>
                    <br></br>

                    {/* Good Readme Generator */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        {/* Repo cuz no deployment */}
                        <a href="https://github.com/pr1me-e1gh7/good-readme-generator" target="_blank">
                            <img src={gdreadme} alt="Good Readme Generator" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                        </a>
                        {/* Repo */}
                        <div className="text-lg flex flex-col justify-center">
                            <a href="https://github.com/pr1me-e1gh7/good-readme-generator" target="_blank">
                                <h2 className="text-5xl mb-2">&lt;Good Readme Generator&gt;</h2>
                            </a>
                        </div>
                    </section>
                    <br></br>

                    {/* Team Profile Generator */}
                    <section className="bg-black text-green-400 rounded-lg lg:flex p-5">
                        {/* Repo cuz no deployment */}
                        <a href="https://github.com/pr1me-e1gh7/team-profile-generator" target="_blank">
                            <img src={tpgen} alt="Team Profile Generator" className="custom-projects rounded w-32 h-32 lg:w-64 lg:-64 mr-8"></img>
                        </a>
                        {/* Repo */}
                        <div className="text-lg flex flex-col justify-center">
                            <a href="https://github.com/pr1me-e1gh7/team-profile-generator" target="_blank">
                                <h2 className="text-5xl mb-2">&lt;Team Profile Generator&gt;</h2>
                            </a>
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
}