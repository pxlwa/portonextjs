import Image from "next/image";


const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/palwa.JPG' className="profile-img" width={300} height={300} alt="congore palwa" />

            <div className="text-container">
            <div className="hero-text">
                </div>
                <h1>Halo Ngabers</h1>
                <p>
                    i hate doing whatever i do
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/olawanlejoel"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olawanlejoel/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default Hero;