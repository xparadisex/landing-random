import { FormEvent, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import contact from './Contact.module.scss'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Swal from 'sweetalert2';
interface IForm {
    fname: string
    companyName: string
    email: string
    phone_number: string
    message: string
}

export const Contact: React.FC = () => {

    const { t } = useTranslation();
    
    const initialStateForm: IForm = {
        fname: 'PRUEBITA',
        companyName: '',
        email: '',
        phone_number: '',
        message: ''
    }

    const { form, handleInputChange, reset } = useForm<IForm>(initialStateForm)

    const { companyName, email, phone_number, message } = form

    const [inputAvialable, setinputAvialable] = useState(false)

    const sendForm = (e: FormEvent) => {
        e.preventDefault()
        setinputAvialable(true);
        console.log('loader');
        axios.post('', form)
            .then((res)=> {
                Swal.fire({
                    icon: 'success',
                    title: 'ENVIADO DE FORMA CORRECTA',
                    text: 'su formulario se envio de forma correcta',
                });
                reset();
                setinputAvialable(false);
                
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'UPS',
                    text: 'HUBO UN ERROR, VAMOS A SOLUCIONARLO',
                });
                reset();
                setinputAvialable(false);
            })

    }

    return (
        <div id="contact" className={ contact.contact__container }>
            <div className={ contact.contact__logo }>
                <img
                    width="100%"
                    src="images/logoMultisim.svg"
                    alt="logo-multisim"
                />
            </div>
            <nav className={ contact.contact__links }>
                <ul className={ contact.contact__links_container }>
                    <li className={ contact.contact__links_item }>
                        {t('footer.start')}
                    </li>
                    <li className={ contact.contact__links_item }>
                        {t('footer.about_us')}
                    </li>
                    <li className={ contact.contact__links_item }>
                        {t('footer.know_more')}
                    </li>
                    <li className={ contact.contact__links_item }>
                        {t('footer.contact_us')}
                    </li>
                    <div className={ `${contact.contact__links_item} ${contact.social}` }>
                        <img className={ contact.social_item } src="/static/svg/fb.svg" alt="facebook"/>
                        <img className={ contact.social_item } src="/static/svg/yt.svg" alt="youtube"/>
                        <img className={ contact.social_item } src="/static/svg/linkedin.svg" alt="linkedin"/>
                        <img className={ contact.social_item } src="/static/svg/ig.svg" alt="instagram"/>
                    </div>
                </ul>
                <div className={ contact.contact__links_copy }>
                    Copyright&#169;2021 Multisim
                </div>
            </nav>
            <form
                className={ contact.contact__form }
                onSubmit={ sendForm }
            >
                <div className={ contact.contact__form_title }>
                    {t('footer.form.title')}
                </div>
                <div className={ contact.contact__form_body }>
                    <div className={ contact.contact__form_input }>
                        <input
                            name="companyName"
                            value={ companyName }
                            placeholder={t('footer.form.company_name')}
                            type="text"
                            onChange={ handleInputChange }
                            required
                            disabled={inputAvialable}
                        />
                    </div>
                    <div className={ contact.contact__form_input }>
                        <input
                            name="email"
                            value={ email }
                            placeholder={t('footer.form.email')}
                            type="email"
                            onChange={ handleInputChange }
                            required
                            disabled={inputAvialable}
                        />
                    </div>
                    <div className={ contact.contact__form_input }>
                        <input
                            name="phone_number"
                            value={ phone_number }
                            placeholder={t('footer.form.phone_number')}
                            type="tel"
                            onChange={ handleInputChange }
                            required
                            disabled={inputAvialable}
                            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        />
                    </div>
                    <div className={ contact.contact__form_textarea }>
                        <textarea
                            name="message"
                            value={ message }
                            placeholder={t('footer.form.description')}
                            onChange={ handleInputChange }
                            required
                            disabled={inputAvialable}
                        />
                    </div>
                </div>
                <div className={ contact.contact__form_button }>
                    <button type="submit" disabled={inputAvialable}>
                        {t('footer.form.send')}
                    </button>
                </div>
            </form>
        </div>
    )
}

