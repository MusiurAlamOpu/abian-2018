
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import navStyles from '../../styles/modules/navbar.module.scss'

const Navbar = () => {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setOpenMobileNav(false);
    }, [router]);

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
                            console.log(data.link === router.pathname);

                            return (
                                <div key={i} style={{ color: `${data.link === router.pathname ? "orange" : "white"}` }}>
                                    {

                                        <Link href={data.link} >
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
                <div className={navStyles.barIcon} onClick={() => setOpenMobileNav(!openMobileNav)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            {openMobileNav &&
                <div className={navStyles.mobileNav}>
                    {
                        links.map((data, i) => {
                            return (
                                <div key={i} style={{ color: `${data.link === router.pathname ? "orange" : "white"}` }}>
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
            }
        </nav>
    )
}

export default Navbar;

