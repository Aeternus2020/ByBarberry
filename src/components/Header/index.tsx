import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import '../../styles/header.css';
import '@fontsource/lily-script-one';
import logo from "../../images/logo.svg"

const Header = () => {
    const [buttonBurgerOpen, setButtonBurgerOpen] = useState<boolean>(false);
    const [buttonBurgerClose, setButtonBurgerClose] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [navMenu, setNavMenu] = useState<boolean>(true);
    const navRef = useRef<HTMLDivElement | null>(null);

    const buttons = {
        barberrs: 'барбери',
        about: 'про нас',
        price: 'ціни',
        contacts: 'де нас знайти'
    };

    const handleScrollAndResize = () => {
        if (window.innerWidth < 768) {
            setNavMenu(false);
            toggleMenuOpen(false, true);
        } else {
            setNavMenu(true);
            toggleMenuOpen(false, false);
        }
    };

    const toggleMenuOpen = (firstState: boolean | ((prevState: boolean) => boolean), secondState: boolean | ((prevState: boolean) => boolean)) => {
        setButtonBurgerOpen(firstState);
        setButtonBurgerClose(secondState);
        setMenuOpen(!secondState);
    };

    const handleClickOutside = (event: { target: any; }) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            toggleMenuOpen(false, true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleScrollAndResize);
        handleScrollAndResize();
        return () => {
            window.removeEventListener('resize', handleScrollAndResize);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (menuOpen && !navMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const buttonKeys: Array<keyof typeof buttons> = Object.keys(buttons) as Array<keyof typeof buttons>;

    return (<>
        {buttonBurgerOpen && (
            <button className={`burger__button open`} onClick={() => toggleMenuOpen(false, true)}>
                ×
            </button>
        )}
        {buttonBurgerClose && (
            <button className={`burger__button close`} onClick={() => toggleMenuOpen(true, false)}>
                – – –
            </button>
        )}
        {(!buttonBurgerClose && buttonBurgerOpen) && (
            <header className="header_close" ref={navRef}>
                <span>since 2022</span>
                <h1>barberry</h1>
                <nav className="nav_close">
                    {buttonKeys.map((buttonKey) => {
                        const buttonLabel = buttons[buttonKey];
                        return (
                            <Link
                                key={buttonKey}
                                to={buttonKey}
                                spy
                                smooth
                                duration={250}>
                                <button className='nav-button' onClick={() => toggleMenuOpen(false, true)}>{buttonLabel}</button>
                            </Link>
                        );
                    })}
                </nav>
            </header>
        )}
        {navMenu && (
            <header className="header_open">
                <h1>barberry</h1>
                <nav className="nav_open">
                    {buttonKeys.map((buttonKey) => {
                        const buttonLabel = buttons[buttonKey];
                        return (
                            <Link
                                key={buttonKey}
                                to={buttonKey}
                                spy
                                smooth
                                duration={250}>
                                <button className='nav-button'>{buttonLabel}</button>
                            </Link>
                        );
                    })}
                </nav>

            </header>

        )}
        <div className='header-logo'><img src={logo} alt="Logo" /></div>
    </>
    );
};

export default Header;
