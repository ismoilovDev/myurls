import React, {useMemo, useState} from 'react';
import '../Styles/components.css';
import '../Styles/works.css';
import {motion} from 'framer-motion';
import { pageAnimation } from "../animation";



function Works() {

    let [count, setCount] = useState(0);

    function inc() {
        if(count < 3643) {
            setCount(++count);
            setTimeout(() => {
                inc()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc()
    }, [])
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className="works">
            <div className="works-title">
                <h1>How It Works</h1>
                <p>
                    Our universal link provides your followers access to all of your content in one place, giving you the freedom to share more.
                </p>
            </div>
            <div className="create-link">
                <div className="container">
                    <div className="section-row center middle">
                        <ul>
                            <li>
                                <div className="link-img">
                                    <img src="https://cdn.myurls.co/packs/media/images/website/how-it-works/signup-d7c2d43383d276cb7df582dd3bcde9fb.png" alt="img" />
                                </div>
                                <div className="step-number">1</div>
                                <h4>Create your myurls account</h4>
                                <p>
                                    Choose a username, customize your profile, and add your links.
                                </p>
                            </li>
                            <li>
                                <div className="link-img">
                                    <img src="https://cdn.myurls.co/packs/media/images/website/how-it-works/link-in-bio-6465f2d830fa3de92a3484d26dc76b2d.png" alt="img" />
                                </div>
                                <div className="step-number">2</div>
                                <h4>Get more out of your “link in bio”</h4>
                                <p>
                                    Copy your link and use it across any social platform.
                                </p>
                            </li>
                            <li>
                                <div className="link-img">
                                    <img src="https://cdn.myurls.co/packs/media/images/website/how-it-works/profile-0d8b6898df1b99f3c5189425032816a1.png" alt="img" />
                                </div>
                                <div className="step-number">3</div>
                                <h4>Share more of your content</h4>
                                <p>
                                    Give your followers access to more with one powerful link.
                                </p>
                            </li>                            
                        </ul>
                        <p className="work-counter">
                                <span>{count}</span>
                                <span> people have signed up this week!</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="works-title">
                <h2>Your Links. Your Content.</h2>
                <p>
                    Add a link from any platform. Below are some of our favorites.
                </p>
            </div>
            <div className="your-links">
                <div className="container">
                    <div className="section-row">
                        <ul className="services-list">
                            <li className="service">
                                <i className='bx bxl-amazon'></i>
                                <span>Amazon</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-pyramid' ></i>
                                <span>Amino Apps</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-anchor' ></i>
                                <span>Anchor</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-star pad' ></i>
                                <span>Apple App Store</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-music' ></i>
                                <span>Apple Music</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-podcast pad' ></i>
                                <span>Apple Podcasts</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-audible' ></i>
                                <span>Audiomack</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-star-half pad' ></i>
                                <span>Beatstars</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-behance' ></i>
                                <span>Behance</span>
                            </li>
                            <li className="service pad">
                                <i className='bx bx-bitcoin' ></i>
                                <span>Bitbucket</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-blogger pad' ></i>
                                <span>Blogger</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-calendar' ></i>
                                <span>Calendly</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-dollar pad' ></i>
                                <span>Cash App</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-bar-chart' ></i>
                                <span>Deezer</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-discord-alt pad' ></i>
                                <span>Discord</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-disc'></i>
                                <span>Distrokid</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-mastodon' ></i>
                                <span>Dribble</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-dropbox' ></i>
                                <span>Dropbox</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-mail-send' ></i>
                                <span>Email</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-etsy' ></i>
                                <span>Etsy</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-shape-square pad' ></i>
                                <span>Eventbrite</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-facebook-circle' ></i>
                                <span>Facebook</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-messenger' ></i>
                                <span>Messenger</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-flickr' ></i>
                                <span>Flickr</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-github' ></i>
                                <span>GitHub</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-filter' ></i>
                                <span>GoFundMe</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-file-doc' ></i>
                                <span>Google Docs</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-google-cloud' ></i>
                                <span>Google Drive</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-dock-top' ></i>
                                <span>Google Forms</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-spreadsheet' ></i>
                                <span>Google Sheets</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-instagram' ></i>
                                <span>Instagram</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-doughnut-chart' ></i>
                                <span>Ko-fi</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-medium-old' ></i>
                                <span>Last.fm</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-message-rounded'></i>
                                <span>Line</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-linkedin-square' ></i>
                                <span>LinkedIn</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-certification' ></i>
                                <span>MediaFire</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-medium-square' ></i>
                                <span>Medium</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-first-page' ></i>
                                <span>Mixer</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-lock' ></i>
                                <span>OnlyFans</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-parking' ></i>
                                <span>Pandora</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-patreon' ></i>
                                <span>Patreon</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-paypal' ></i>
                                <span>PayPal</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-periscope' ></i>
                                <span>Periscope</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-phone' ></i>
                                <span>Phone</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-pinterest' ></i>
                                <span>Pinterest</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-redbubble' ></i>
                                <span>Poshmark</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-link' ></i>
                                <span>Redbubble</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-reddit' ></i>
                                <span>Reddit</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-shopify' ></i>
                                <span>Shopee</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-slack' ></i>
                                <span>Slack</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-conversation' ></i>
                                <span>SMS</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-snapchat pad' ></i>
                                <span>Snapchat</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-soundcloud pad' ></i>
                                <span>SoundCloud</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-spotify' ></i>
                                <span>Spotify</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-steam' ></i>
                                <span>Steam</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-telegram pad' ></i>
                                <span>Telegram</span>
                            </li>
                            <li className="service">
                                <i className='bx bxs-tv' ></i>
                                <span>Tellonym</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-shape-polygon' ></i>
                                <span>Tidal</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-tiktok pad' ></i>
                                <span>TikTok</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-tumblr pad' ></i>
                                <span>Tumblr</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-twitch' ></i>
                                <span>Twitch</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-twitter' ></i>
                                <span>Twitter</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-dev-to' ></i>
                                <span>Venmo</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-vimeo' ></i>
                                <span>Vimeo</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-loader-circle' ></i>
                                <span>VSCO</span>
                            </li>
                            <li className="service">
                                <i className='bx bx-won' ></i>
                                <span>Wattpad</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-whatsapp' ></i>
                                <span>WhatsApp</span>
                            </li>
                            <li className="service">
                                <i className='bx bxl-youtube' ></i>
                                <span>YouTube</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Works;
