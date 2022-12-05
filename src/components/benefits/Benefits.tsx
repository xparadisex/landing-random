import benefits from './Benefits.module.scss';
import Card from '../utils/card/Card';
import { useTranslation } from 'react-i18next';

export const Benefits = () => {

    const { t } = useTranslation();

    return (
        <div className={benefits.container} id="benefits">
            <div className={benefits.info}>
                <h4>{t('benefit.title')}</h4>
                <div className={benefits.cards_group} >
                    <Card
                        icon={'images/benefit1.svg'}
                        text={t('benefit.knowledge')}
                    />
                    <Card
                        icon={'images/benefit2.svg'}
                        text={t('benefit.evaluation')}
                    />
                    <Card
                        icon={'images/benefit3.svg'}
                        text={t('benefit.costs')}
                    />
                    <Card
                        icon={'images/benefit4.svg'}
                        text={t('benefit.recruitment')}
                    />
                </div>
            </div>
        </div>
    )
}
