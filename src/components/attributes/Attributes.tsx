import attributes from './Attributes.module.scss'
import Card from '../utils/card/Card';
import { useTranslation } from 'react-i18next';

export const Attributes = () => {

    const { t } = useTranslation();

    return (

        <div className={attributes.container} id="attributes">
            <div className={attributes.info}>
                <h4>{t('attribute.title')}</h4>
                <div className={attributes.cards_group} >
                    <Card
                        icon={'images/attribute1.svg'}
                        text={t('attribute.multi_platform')}
                    />
                    <Card
                        icon={'images/attribute2.svg'}
                        text={t('attribute.scope')}
                    />
                    <Card
                        icon={'images/attribute3.svg'}
                        text={t('attribute.decisions')}
                    />
                    <Card
                        icon={'images/attribute4.svg'}
                        text={t('attribute.time')}
                    />
                </div>
            </div>
        </div>
    )
}
