import { images } from './data/images'
import business from './Business.module.scss'
import { useTranslation } from 'react-i18next';

export const Business: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div id="business" className={ business.business__container }>
            <h2 className={ business.business__title }>
                {t('business.title')}
            </h2>
            <div className={ business.business__images_container }>
                {
                    images.map((item, index) =>
                        <img
                            key={ index }
                            src={ item.url }
                            alt={ `img ${index}` }
                            // loading="lazy"
                            // width="100%"
                            // height="50%"
                        />
                    )
                }
            </div>
        </div>
    )
}
