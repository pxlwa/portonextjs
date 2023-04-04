import Link from "next/link";


const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Palwa's Playground
                </Link>
            </div>

        <div className="nav-content">
            <div className="content">
                <Link href="/">
                    HOME
                </Link>
            </div>&nbsp;

            <div className="content">
                <Link href="/">
                    LABS
                </Link>
            </div>
        </div>
            
            
            {/* <a href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit?usp=sharing" className="cta-btn">Resume</a> */}
        </div>
    )
}

export default Navbar;