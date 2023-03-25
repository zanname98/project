import classNames from 'classnames/bind';
import images from '~/assets/images';
import Styles from './Portfolio.module.scss';

const cx = classNames.bind(Styles);
function Portfolio() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2>Pofolio</h2>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </div>
            <div className={cx('container')}>
                <div className={cx('list-menu')}>
                    <ul>
                        <li>
                            <a>All categories</a>
                        </li>
                        <li>
                            <a>UI Design</a>
                        </li>
                        <li>
                            <a>Web Templates</a>
                        </li>
                        <li>
                            <a>Logo</a>
                        </li>
                        <li>
                            <a>Branding</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('card-item')}>
                    <div className={cx('image-item')}>
                        <img src={images.image1} />
                    </div>
                    <div className={cx('image-item')}>
                        <img src={images.image2} />
                    </div>
                    <div className={cx('image-item')}>
                        <img src={images.image3} />
                    </div>
                    <div className={cx('image-item')}>
                        <img src={images.image4} />
                    </div>
                    <div className={cx('image-item')}>
                        <img src={images.image5} />
                    </div>
                    <div className={cx('image-item')}>
                        <img src={images.image6} />
                    </div>
                    <div className={cx('image-item')}>
                        <img src={images.image7} />
                    </div>
                    <div className={cx('image-item')}>
                        <img src={images.image8} />
                    </div>
                    <div className={cx('image-item')}>
                        <img src={images.image9} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
