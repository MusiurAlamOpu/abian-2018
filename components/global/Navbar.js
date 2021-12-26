
import Link from "next/link";
// import { useState } from "react";

import navStyles from '../../styles/modules/navbar.module.scss'

const Navbar = () => {
    // const [openMobileNav, setOpenMobileNav] = useState(false);

    const links = [
        {
            linkName: "Home",
            link: "/"
        },
        {
            linkName: "Projects",
            link: "/projects"
        },
        {
            linkName: "About",
            link: "/about-us"
        },
        {
            linkName: "Contact",
            link: "/contact-us"
        },
        {
            linkName: "Login",
            link: "/login"
        }
    ];
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.mainNav}>
                <div className={navStyles.leftDiv}>ABIAN
                    <span >FUND</span>
                </div>

                <div className={navStyles.rightDiv}>
                    {
                        links.map((data, i) => {
                            return (
                                <div key={i}>
                                    {

                                        <Link href={data.link}>
                                            {
                                                data.linkName === "Login" ?
                                                    <button className="btn-nav">
                                                        {data.linkName}
                                                    </button>
                                                    :
                                                    <p>{data.linkName}</p>
                                            }
                                        </Link>

                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

