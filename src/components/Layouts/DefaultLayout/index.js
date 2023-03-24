import classNames from 'classnames/bind';
import Styles from './DefaultLayout.module.scss';

import LeftMenu from '~/components/Layouts/components/LeftMenu';
import MainMenu from '~/components/Layouts/components/MainMenu';
import RightMenu from '~/components/Layouts/components/RightMenu';
import Footer from '~/components/Layouts/components/Footer';

const cx = classNames.bind(Styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-menu')}>
                <LeftMenu />
            </div>
            <div className={cx('main-menu')}>
                <MainMenu />
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                    <div className={cx('footer')}>
                        <Footer />
                    </div>
                </div>
            </div>
            <div className={cx('right-menu')}>
                <RightMenu />
            </div>
        </div>
    );
}

export default DefaultLayout;
