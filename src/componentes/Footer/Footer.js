import "./Footer.css"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="divContainer">
                <h1> </h1>
                <nav className="footerNav">
                    <Link to={"https://www.instagram.com/armon.studio/"} target="_blank" className="navLinkF">Instagram</Link>
                    <Link to={"https://www.facebook.com/Armonstudio-112710430636869"} className="navLinkF">Facebook</Link>
                    <Link to={"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"} className="navLinkF">Email</Link>
                </nav>
            </div>
        </footer>
    )
}
export default Footer