import classNames from 'classnames/bind';

import Styles from './Footer.module.scss';

const cx = classNames.bind(Styles);
function Footer() {
    return <div className={cx('footer')}>2021 All Rights Reserved.Ojjomedia</div>;
}

export default Footer;
