import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import {
    faAddressBook,
    faCircleHalfStroke,
    faGraduationCap,
    faHouse,
    faKitMedical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Styles from './RightMenu.module.scss';
const cx = classNames.bind(Styles);
function RightMenu() {
    return (
        <div className={cx('container')}>
            <div className={cx('contrast')}>
                <FontAwesomeIcon icon={faCircleHalfStroke} />
            </div>
            <div className={cx('list-menu')}>
                <ul>
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/service">
                            <FontAwesomeIcon icon={faAddressBook} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/cv">
                            <FontAwesomeIcon icon={faFileCode} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            <FontAwesomeIcon icon={faKitMedical} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <FontAwesomeIcon icon={faBlogger} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RightMenu;
