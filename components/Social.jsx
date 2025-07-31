import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";


const socials = [
    { icon: <FaGithub />, path: "https://github.com/Yabu920"},
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaTwitter />, path: "" },
    { icon: <FaFacebook />, path: "" },
    { icon: <FaInstagram />, path: "" }
]

const  Social = ({ containerStyles, iconStyles}) =>{
    return(
        <div className ={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;