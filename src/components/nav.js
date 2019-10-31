import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import './nav.module.scss'
import DarkModeToggle from './dark-mode/DarkModeToggle'

import navStyles from './nav.module.scss';

const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header className={navStyles.nav}>
            <h1>
                <Link className={navStyles.title} to='/'>{data.site.siteMetadata.title}</Link>
            </h1>
            <nav className={navStyles.navMain}>
                <ul className={navStyles.navList}>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/'>Home</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/projects'>Projects</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/blog'>Blog</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/contact'>Contact</Link></li>
                </ul>
                    <DarkModeToggle />
            </nav>
        </header>
    )
}

export default Nav;