import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);
function Blog() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2>Blog</h2>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>
            </div>
            <div className={cx('container')}>
                <div className={cx('card-item')}>
                    <img src={images.image10} />
                    <h2>How to make web tempates</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna{' '}
                    </p>
                    <a>
                        Learn more <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                <div className={cx('card-item')}>
                    <img src={images.image12} />
                    <h2>make Business card</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna{' '}
                    </p>
                    <a>
                        Learn more <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                <div className={cx('card-item')}>
                    <img src={images.image13} />
                    <h2>How to make Flyer Design</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna{' '}
                    </p>
                    <a>
                        Learn more <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Blog;
