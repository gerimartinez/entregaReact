import "./Footer.css"
import {BsInstagram} from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import {HiMail} from "react-icons/hi"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="divContainer">
                <h1> </h1>
                <nav className="footerNav">
                    <a href="https://www.instagram.com/armon.studio/" target="_blank" className="navLinkF">
                       <BsInstagram/>
                    </a>
                    <a href="https://www.facebook.com/Armonstudio-112710430636869" target="_blank" className="navLinkF">
                        <BsFacebook/>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" className="navLinkF">
                      <HiMail/>    
                    </a>
                </nav>
            </div>
        </footer>
    )
}
export default Footer