import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import Styles from './Home.module.scss';

const cx = classNames.bind(Styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h1>Price plans</h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </div>
            <div className={cx('container')}>
                <div className={cx('card-item')}>
                    <div className={cx('card-title')}>
                        <h2>silver</h2>
                        <h1>
                            $0.00<span> /Hour</span>
                        </h1>
                        <p>For most businesses that want to optimize web queries</p>
                    </div>
                    <ul className={cx('list-title')}>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>UI Design</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>logo design</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                            <span>seo optimization</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                            <span>wordPress integration</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                            <span>5 Websites</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                            <span>unlimited user</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                            <span>20 gB bandwith</span>
                        </li>
                    </ul>
                    <div className={cx('button')}>
                        <button>ORDER NOW</button>
                    </div>
                </div>
                <div className={cx('card-item')}>
                    <div className={cx('card-title')}>
                        <h2>silver</h2>
                        <h1>
                            $50.00<span> /Hour</span>
                        </h1>
                        <p>For most businesses that want to optimize web queries</p>
                    </div>
                    <ul className={cx('list-title')}>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>UI Design</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>logo design</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>seo optimization</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>wordPress integration</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                            <span>5 Websites</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                            <span>unlimited user</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                            <span>20 gB bandwith</span>
                        </li>
                    </ul>
                    <div className={cx('button')}>
                        <button className={cx('active')}>ORDER NOW</button>
                    </div>
                </div>
                <div className={cx('card-item')}>
                    <div className={cx('card-title')}>
                        <h2>silver</h2>
                        <h1>
                            $80.00<span> /Hour</span>
                        </h1>
                        <p>For most businesses that want to optimize web queries</p>
                    </div>
                    <ul className={cx('list-title')}>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>UI Design</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>logo design</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>seo optimization</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>wordPress integration</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>5 Websites</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>unlimited user</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            <span>20 gB bandwith</span>
                        </li>
                    </ul>
                    <div className={cx('button')}>
                        <button>ORDER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
