import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar ({ currentPage, handlePageChange }) {
    return (
        <header className="bg-black text-green-400" id="nvbr">
            <div className="container mx-auto flex justify-center">
                <nav className="flex">
                    {/* Name link */}
                    <h1 className="inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white">
                        <a href="https://github.com/pr1me-e1gh7" target="_blank">David Caro</a>
                    </h1>

                    {/* Home */}
                    <NavLink exact to="/" 
                    activeClassName="text-white text-4xl"
                    className="inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white">
                        &lt;About&gt;
                    </NavLink>

                    {/* Projects */}
                    <NavLink exact to="/Projects" 
                    activeClassName="text-white text-4xl"
                    className="inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white">
                        &lt;Projects&gt;
                    </NavLink>

                    {/* Contact */}
                    {/* <NavLink exact to="/ContactMe" 
                    activeClassName="text-white text-4xl"
                    className="inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white">
                        &lt;Contact&gt;
                    </NavLink> */}
                    
                    {/* Resume */}
                    <a activeClassName="text-white text-4xl"
                    className="inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white"
                    href="https://drive.google.com/file/d/157yu4DMGOO1Qx-D4fQ_UF0BXG1HgMQ5S/view"
                    target="_blank">
                        &lt;Resume&gt;
                    </a>
                </nav>
            </div>
        </header>
    )
}