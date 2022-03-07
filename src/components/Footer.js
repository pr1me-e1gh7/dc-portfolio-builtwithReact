import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer () {
    return (
        <section className="footer bg-black text-green-400" >
            <div class="mx-auto flex justify-center">
                <div className="inline-flex px-3 my-1">
                <SocialIcon url="https://github.com/pr1me-e1gh7" target="_blank" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }}></SocialIcon>
                <SocialIcon url="https://www.linkedin.com/in/davidanthonycaro/" target="_blank" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }}></SocialIcon>
                <SocialIcon url="https://discordapp.com/users/pr1me_e1gh7#1857/" target="_blank" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }}></SocialIcon>
                <SocialIcon url="https://stackoverflow.com/users/17207475/pr1me-e1gh7" target="_blank" className="inline-flex py-7 px-3 mr-3 navicons"
                    style={{ height:35, width:35 }}></SocialIcon>

                </div>
            </div>
        </section>
    )
}