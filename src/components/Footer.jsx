import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import your custom CSS

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-grid'>
                <div>
                    <h2 className='footer-heading'>Contact Us</h2>
                    <p className='footer-text'>ieeepie.kerala@gmail.com</p>
                    <p className='footer-text'>Location: XYZ College, District, Kerala, Pincode</p>
                </div>
                <div>
                    <h2 className='footer-heading'>Quick Links</h2>
                    <ul className='footer-list'>
                        <li><a href='https://www.ieee.org/' className='footer-link'>IEEE</a></li>
                        <li><a href='https://www.ieeer10.org/' className='footer-link'>IEEE R10</a></li>
                        <li><a href='https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join' className='footer-link'>Become a Member</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='footer-heading'>Follow Us</h2>
                    <ul className='footer-social'>
                        <li><FaFacebookF className='facebook-icon' />
                            <a href='https://www.facebook.com/ieeepieks' className='footer-link'>Facebook</a>
                        </li>
                        <li><FaYoutube className='youtube-icon' />
                            <a href='' className='footer-link'>YouTube</a>
                        </li>
                        <li><FaInstagram className='instagram-icon' />
                            <a href='https://www.instagram.com/ieeepie.kerala/' className='footer-link'>Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Copyright © 2025 IEEE PIE KERALA SECTION</p>
            </div>
        </footer>
    );
}
