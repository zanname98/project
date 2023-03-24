import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Styles from './LeftMenu.module.scss';

import images from '~/assets/images';
import {
    faDribbble,
    faFacebook,
    faLinkedin,
    faSquareInstagram,
    faSquareTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function LeftMenu() {
    return (
        <div className={cx('container')}>
            <div className={cx('profile')}>
                <img src={images.avatar} />
                <p className={cx('profile-name')}>Rayan Adlardard</p>
                <p className={cx('profile-desc')}>Font-end Developer</p>
                <ul className={cx('list-icon')}>
                    <li>
                        <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSquareTwitter} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faYoutube} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDribbble} />
                    </li>
                </ul>
            </div>
            <div className={cx('about')}>
                <div className={cx('age')}>
                    <p>Age</p>
                    <span>24</span>
                </div>
                <div className={cx('residence')}>
                    <p>Residence</p>
                    <span>BD</span>
                </div>
                <div className={cx('freelance')}>
                    <p>Freelence</p>
                    <span>Availible</span>
                </div>
                <div className={cx('adress')}>
                    <p>Adress</p>
                    <span>Dhaka,Bangladesh</span>
                </div>
            </div>
            <div className={cx('langguages')}>
                <h2>Langguages</h2>
                <div classname={cx('lag-item')}>
                    <div className={cx('df')}>
                        <p>Bangla</p>
                        <p>100%</p>
                    </div>
                    <div className={cx('border')}>
                        <div className={cx('progress-max')}></div>
                    </div>
                </div>
                <div classname={cx('lag-item')}>
                    <div className={cx('df')}>
                        <p>English</p>
                        <p>60%</p>
                    </div>
                    <div className={cx('border')}>
                        <div className={cx('progress-six')}></div>
                    </div>
                </div>
                <div classname={cx('lag-item')}>
                    <div className={cx('df')}>
                        <p>Spanish</p>
                        <p>80%</p>
                    </div>
                    <div className={cx('border')}>
                        <div className={cx('progress-eight')}></div>
                    </div>
                </div>
            </div>
            <div className={cx('skill')}>
                <h2>Skill</h2>
                <div className={cx('skil-item')}>
                    <div className={cx('df')}>
                        <p>Html</p>
                        <p>90%</p>
                    </div>
                    <div className={cx('border')}>
                        <div className={cx('progress-night')}></div>
                    </div>
                </div>
                <div className={cx('skil-item')}>
                    <div className={cx('df')}>
                        <p>Css</p>
                        <p>80%</p>
                    </div>
                    <div className={cx('border')}>
                        <div className={cx('progress-night')}></div>
                    </div>
                </div>
                <div className={cx('skil-item')}>
                    <div className={cx('df')}>
                        <p>PHP</p>
                        <p>90%</p>
                    </div>
                    <div className={cx('border')}>
                        <div className={cx('progress-night')}></div>
                    </div>
                </div>
                <div className={cx('skil-item')}>
                    <div className={cx('df')}>
                        <p>Reactjs</p>
                        <p>90%</p>
                    </div>
                    <div className={cx('border')}>
                        <div className={cx('progress-night')}></div>
                    </div>
                </div>
            </div>
            <div className={cx('extra-skill')}>
                <h2>Extra skill</h2>
                <div>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                    <span className={cx('titile')}>Bootstrap, Materialize</span>
                </div>
                <div>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                    <span className={cx('titile')}>Stylus, Sass, Less</span>
                </div>
                <div>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                    <span className={cx('titile')}>Gulp, Webpack, Grunt</span>
                </div>
                <div>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                    <span className={cx('titile')}>GIT Knowledge</span>
                </div>
            </div>
            <button className={cx('button-download')}>
                <h2>Download cv</h2>
                <FontAwesomeIcon className={cx('download')} icon={faFileArrowDown} />
            </button>
        </div>
    );
}

export default LeftMenu;
