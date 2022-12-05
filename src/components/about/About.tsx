import about from './About.module.scss'
import { useTranslation } from 'react-i18next';

export const About = (): JSX.Element => {

    const { t } = useTranslation();
    
    return (
        <div id="about" className={about.about}>
            <div className={about.contAbtInf}>
                <div className={about.cardInfAb}>
                    <h4>{t('about.about_us')}</h4>
                    <p>
                        {t('about.about_us_description')}
                    </p>
                </div>
                <div  className={about.cardInfAb}>
                    <h4>{t('about.what_do_we_do')}</h4>
                    <p>
                        {t('about.what_do_we_do_description')}
                    </p>
                </div>
            </div>
            <div className={about.contentImgPerson}>
                <img src="images/person.svg" alt="ImagePErson" />
            </div>
        </div>
    )
}

