
import offer from './Offer.module.scss'
import { useTranslation } from 'react-i18next';

export const Offer = (): JSX.Element => {

    const { t } = useTranslation();

    return (
        <div id="offer" className={offer.offer}>
            <div className={offer.cntOffer}>
                <div className={offer.headOfferInf}>
                    <h4>{t('offer.title')}</h4>
                    <p>
                        {t('offer.description')}
                    </p>
                </div>
                <div className={offer.contCardsOff}>
                    <div className={offer.cardOff}>
                        <img src="images/Offer1.svg" alt="Offer1" />
                        <p>
                            {t('offer.virtual_reality')}
                        </p>
                    </div>
                    <div className={offer.cardOff}>
                        <img src="images/Offer2.svg" alt="Offer2" />
                        <p>
                            {t('offer.3d_simulator')}
                        </p>
                    </div>
                    <div className={offer.cardOff}>
                        <img src="images/Offer3.svg" alt="Offer2" />
                        <p>
                            {t('offer.applications')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
