import * as React from "react";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import youtube from "../img/social/youtube-svgrepo-com.svg";
import tiktok from "../img/social/tiktok-svgrepo-com.svg";

const SocialMedia = () => {
    return (
        <div className="is-4 social" style={{padding: "0.75rem"}}>
            <a title="instagram" href="https://www.instagram.com/younger.skin.cleancare/" target="_blank" rel="noopener noreferrer">
                <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
                />
            </a>
            <a title="youtube" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img
                src={youtube}
                alt="Youtube"
                style={{ width: "1em", height: "1em" }}
                />
            </a>
            <a title="tiktok" href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img
                className="fas fa-lg"
                src={tiktok}
                alt="Tiktok"
                style={{ width: "1em", height: "1em" }}
                />
            </a>
        </div>
    );
}

export default SocialMedia;