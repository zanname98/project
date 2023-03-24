import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import images from '~/assets/images';

import Styles from './MainMenu.module.scss';

const cx = classNames.bind(Styles);
function MainMenu() {
    return (
        <div className={cx('container')}>
            <div className={cx('info')}>
                <div className={cx('title')}>
                    <h1>I’m Rayan Adlrdard</h1>
                    <h1>
                        <span>Front-end</span> Developer
                    </h1>
                </div>
                <div className={cx('desc')}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                        Natoque rutrum semper sed suspendisse nunc lectus.
                    </p>
                </div>
                <button className={cx('btn-hire')}>
                    <p>HIRE ME</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className={cx('banner')}>
                <img src={images.banner} alt="banner" />
            </div>
        </div>
    );
}

export default MainMenu;
