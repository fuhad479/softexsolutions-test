import { ReactComponent as InHQThumbnail } from "src/assets/hq.svg";
import { ReactComponent as InMumbaiThumbnail } from "src/assets/mumbai.svg";
import { ReactComponent as UsThumbnail } from "src/assets/us.svg";
import { ReactComponent as UkThumbnail } from "src/assets/uk.svg";
import { ReactComponent as IndianFlag } from "src/assets/indian-flag.svg";
import { ReactComponent as AmericanFlag } from "src/assets/american-flag.svg";
import { ReactComponent as BritishFlag } from "src/assets/british-flag.svg";

import "./index.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-menus">
            <div className="footer-menu">
              <h2 className="stroked-title">About</h2>
              <ul className="navigation">
                <li className="navigation-item">Who we are</li>
                <li className="navigation-item">Career</li>
                <li className="navigation-item">Events</li>
                <li className="navigation-item">Services</li>
                <li className="navigation-item">Industries</li>
                <li className="navigation-item">Case Study</li>
                <li className="navigation-item">Portfolio</li>
                <li className="navigation-item">Sitemap</li>
                <li className="navigation-item">Contact Us</li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="stroked-title">Mobile</h2>
              <ul className="navigation">
                <li className="navigation-item">Android Apps</li>
                <li className="navigation-item">iPhone Apps</li>
                <li className="navigation-item">Hybrid Apps</li>
                <li className="navigation-item">Flutter</li>
                <li className="navigation-item">React Native</li>
                <li className="navigation-item">Kotlin</li>
                <li className="navigation-item">Ionic</li>
                <li className="navigation-item">Swift</li>
                <li className="navigation-item">Xamrin</li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="stroked-title">WEB</h2>
              <ul className="navigation">
                <li className="navigation-item">PHP</li>
                <li className="navigation-item">Java</li>
                <li className="navigation-item">Python</li>
                <li className="navigation-item">Wordpress</li>
                <li className="navigation-item">Drupal</li>
                <li className="navigation-item">Laravel</li>
                <li className="navigation-item">CodeIgniter</li>
                <li className="navigation-item">CakePHP</li>
                <li className="navigation-item">TypeScript</li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="stroked-title">Ecommerce</h2>
              <ul className="navigation">
                <li className="navigation-item">Magento</li>
                <li className="navigation-item">Shopify</li>
                <li className="navigation-item">Ubercart</li>
                <li className="navigation-item">Prestashop</li>
                <li className="navigation-item">CS Cart</li>
                <li className="navigation-item">VirtueMart</li>
                <li className="navigation-item">BigCommerce</li>
                <li className="navigation-item">WooCommerce</li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="stroked-title">AI & ML</h2>
              <ul className="navigation">
                <li className="navigation-item">Text to Speech</li>
                <li className="navigation-item">Business Intelligence</li>
                <li className="navigation-item">Data Forecasting</li>
                <li className="navigation-item">Natural Language Processing</li>
                <li className="navigation-item">Data Analytics</li>
                <li className="navigation-item">Object Recognition</li>
                <li className="navigation-item">Sentimental Analysis</li>
                <li className="navigation-item">Alexa Skills Development</li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="stroked-title">IoT & Embedded</h2>
              <ul className="navigation">
                <li className="navigation-item">IoT App</li>
                <li className="navigation-item">Embedded Software</li>
                <li className="navigation-item">IoT Hardware Prototyping</li>
                <li className="navigation-item">IoT Dashboard and Analytics</li>
                <li className="navigation-item">
                  Smart Home - Home Automation
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="stroked-title">Blockchain</h2>
              <ul className="navigation">
                <li className="navigation-item">Wallet</li>
                <li className="navigation-item">Exchange</li>
                <li className="navigation-item">Ethereum</li>
                <li className="navigation-item">Hyperledger</li>
                <li className="navigation-item">Smart Contracts</li>
                <li className="navigation-item">Private Blockchains</li>
                <li className="navigation-item">NFT Marketplace</li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="stroked-title">Game</h2>
              <ul className="navigation">
                <li className="navigation-item">Unity 3D</li>
                <li className="navigation-item">Unreal Engine</li>
                <li className="navigation-item">Augmented Reality</li>
                <li className="navigation-item">Virtual Reality</li>
                <li className="navigation-item">Casual Games</li>
                <li className="navigation-item">Metaverse</li>
                <li className="navigation-item">NFT Marketplace</li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="stroked-title">Salesforce</h2>
              <ul className="navigation">
                <li className="navigation-item">Salesforce Development</li>
                <li className="navigation-item">Salesforce Consulting</li>
                <li className="navigation-item">Salesforce Implementation</li>
              </ul>
            </div>
          </div>
          <div className="locate-us">
            <h2 className="stroked-title">Locate Us</h2>
            <div className="locations">
              <div className="location">
                <div className="thumbnail">
                  <InHQThumbnail />
                </div>
                <div className="location-details">
                  <div className="country">
                    <IndianFlag />
                    <span>INDIA (HQ)</span>
                  </div>
                  <p className="address">
                    C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G.
                    Highway, Ahmedabad, Gujarat, 380061
                  </p>
                  <p className="mobile">+91 8000-161161</p>
                </div>
              </div>
              <div className="location">
                <div className="thumbnail">
                  <InMumbaiThumbnail />
                </div>
                <div className="location-details">
                  <div className="country">
                    <IndianFlag />
                    <span>MUMBAI OFFICE</span>
                  </div>
                  <p className="address">
                    C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G.
                    Highway, Ahmedabad, Gujarat, 380061
                  </p>
                  <p className="mobile">+91 8000-161161</p>
                </div>
              </div>
              <div className="location">
                <div className="thumbnail">
                  <UsThumbnail />
                </div>
                <div className="location-details">
                  <div className="country">
                    <AmericanFlag />
                    <span>US OFFICE</span>
                  </div>
                  <p className="address">
                    C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G.
                    Highway, Ahmedabad, Gujarat, 380061
                  </p>
                  <p className="mobile">+91 8000-161161</p>
                </div>
              </div>
              <div className="location">
                <div className="thumbnail">
                  <UkThumbnail />
                </div>
                <div className="location-details">
                  <div className="country">
                    <BritishFlag />
                    <span>UK OFFICE</span>
                  </div>
                  <p className="address">
                    C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G.
                    Highway, Ahmedabad, Gujarat, 380061
                  </p>
                  <p className="mobile">+91 8000-161161</p>
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter-wrapper">
            <div className="footer-menu">
              <h2 className="stroked-title">Help</h2>
              <ul className="navigation">
                <li className="navigation-item">Contact Us</li>
                <li className="navigation-item">Privacy Policy</li>
                <li className="navigation-item">Sitemap</li>
                <li className="navigation-item">Global</li>
              </ul>
            </div>
            <div className="newsletter">
              <h2 className="stroked-title">Subscribe to our newsletter</h2>
              <p className="newsletter-brief">Stay updated with latest technology trends and topics with us.</p>
              <div className="input-wrapper">
                <input type="text" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="copywrite">© 2023 Hyperlink InfoSystem | All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}
