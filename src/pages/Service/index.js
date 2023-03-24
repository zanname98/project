import {
    faArrowRight,
    faBirthdayCake,
    faIdCard,
    faLaptopCode,
    faMicrophone,
    faVrCardboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import Styles from './Service.module.scss';

const cx = classNames.bind(Styles);
function Service() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h1>My services</h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </div>
            <div className={cx('container')}>
                <div className={cx('card-item')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLaptopCode} />
                    <h2>web development</h2>
                    <p>blog, e-commerce</p>
                </div>
                <div className={cx('card-item')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faBirthdayCake} />
                    <h2>uI/uX design</h2>
                    <p>Mobile app, website design</p>
                </div>
                <div className={cx('card-item')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faMicrophone} />
                    <h2>sound design</h2>
                    <p>Voice Over, Beat Making</p>
                </div>
                <div className={cx('card-item')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faVrCardboard} />
                    <h2>Game development</h2>
                    <p>Character Design, Props & Objects</p>
                </div>
                <div className={cx('card-item')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faIdCard} />
                    <h2>Photography</h2>
                    <p>Portrait, product photography</p>
                </div>
                <div className={cx('card-item')}>
                    <h2>Advertising</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna
                        viverra morbi.{' '}
                    </p>
                    <a>
                        ORDER NOW <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Service;
