import { useState } from 'react'
import main from './Main.module.scss'
import { useTranslation } from 'react-i18next';


export const Main = (): JSX.Element => {

    const { t } = useTranslation();

    const [optSelect, setOptSelect] = useState<string>('main');
    const [moreOpt, setMoreOpt] = useState<boolean>(false);

    return (
        <div className={main.main} id="main">
            <nav className={main.navPrin}>
                <ul className={main.ulPrin}>
                    <li className={optSelect === 'main' ? main.active : ''}>
                        <a href="#main" onClick={() => setOptSelect('main')}>{t('nav.start')}</a>
                    </li>
                    <li className={optSelect === 'about' ? main.active : ''}>
                        <a href="#about" onClick={() => setOptSelect('about')}>{t('nav.about_us')}</a>
                    </li>
                    <div className={main.contMoreOpt} >
                        <img src="/images/bars.svg" alt="barsIcon" onClick={() => setMoreOpt(!moreOpt)} />
                        <p onClick={() => setMoreOpt(!moreOpt)}>
                            {t('nav.know_more')}
                        </p>
                        {
                            moreOpt &&
                            <nav>
                                <ul onClick={() => setMoreOpt(false)}>
                                    <li><a href="#main">{t('nav.start')}</a></li>
                                    <li><a href="#about">{t('nav.about_us')}</a></li>
                                    <li><a href="#offer">{t('nav.know_more.offer')}</a></li>
                                    <li><a href="#methodology">{t('nav.know_more.methodology')}</a></li>
                                    <li><a href="#benefits">{t('nav.know_more.benefit')}</a></li>
                                    <li><a href="#attributes">{t('nav.know_more.attribute')}</a></li>
                                    <li><a href="#business">{t('nav.know_more.business')}</a></li>
                                    <li><a href="#contact">{t('nav.contact_us')}</a></li>
                                </ul>
                            </nav>

                        }

                    </div>
                    <li><a href="#contact">{t('nav.contact_us')}</a></li>
                </ul>
            </nav>
            <div className={main.contInfEntity}>
                <div className={main.dataEntity}>
                    <div>
                        <img src="images/logoMultisim.svg" alt="logoEntity" />
                    </div>
                    <p> {t('main.description')} </p>
                </div>
            </div>
        </div>
    )
}
