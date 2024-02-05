import logo from "../../assets/logo.svg"
import twitter from "../../assets/twitter.svg"
import gmail from "../../assets/gmail.svg"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"

const Footer = () => (
     <footer>
        <section>
            <div className="content-logo-footer">
                <a href="/" className="f-logo">
                    <img src={logo} alt="Logo Pokemon"/>
                </a>
            </div>
            <div className="social">
                <h2 className="inter-bold connect">Connect With Me:</h2>
                <div className="links">
                    <a href="mailto:modgillgaurav6543@gmail.com" target="_blank" rel="noreferrer">
                        <img src={gmail} alt="Gmail Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/gurpreet-moudgill-76707a1b9/" target="_blank"
                        rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://github.com/Gurpreet-Moudgill/" target="_blank" rel="noreferrer">
                        <img src={github} alt="GitHub Icon" />
                    </a>
                </div>
            </div>
        </section>
    </footer>
)

export default Footer