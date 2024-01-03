import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = (props) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1zcsfqt', 'template_35czwj9', form.current, 'ifzrKMqtC40yArs_A')

        e.target.reset()
    };

    const getContactCard = (title, data, link) => {
        const getIcon = () => {
            return title === 'Email'
                    ? 'bx bx-mail-send contactCardIcon'
                    : title === 'WhatsApp'
                    ? 'bx bxl-whatsapp contactCardIcon'
                    : 'bx bx-mail-send contactCardIcon';
        }

        return (
            <div className='contactCard'>
                <i className={getIcon()}></i>

                <h3 className='contactCardTitle'>{title}</h3>
                <span className='contactCardData'>{data}</span>
                <a href={link} className='contactButton'>
                    Write me <i className='bx bx-right-arrow-alt contactButtonIcon'></i>
                </a>
            </div>
        )
    }

    const getFormContent = type => {
        if (type === 'name') {
            return (
                <div className='contactFormDiv'>
                    <label className='contactFormTag'>Name</label>
                    <input 
                    type='text'
                    name='name'
                    className='contactFormInput' 
                    placeholder='Insert your name' />
                </div>
            )
        } else if (type === 'mail') {
            return (
                <div className='contactFormDiv'>
                    <label className='contactFormTag'>Email</label>
                    <input 
                    type='text'
                    name='email'
                    className='contactFormInput' 
                    placeholder='Insert your email' />
                </div>
            )
        } else {
            return (
                <div>
                    <div className='contactFormDiv contactFormArea'>
                        <label className='contactFormTag'>Message</label>
                        <textarea 
                        name='message' 
                        cols='30' 
                        rows='10'
                        className='contactFormInput'
                        placeholder='Write your message'
                        ></textarea>
                    </div>

                    <button className='button button--flex'>
                        Send Message
                    </button>
                </div>
            )
        }
    }


    return (
        <section className='contact section' id='contact' ref={props.sectionRef}>
            <h2 className='sectionTitle'>Contact Me</h2>
            <span className='sectionSubtitle'>Get in touch</span>

            <div className='contactContainer container grid'>
                {/* Left side */}
                <div className='contactContent'>
                    <h3 className="contactTitle">Talk to me</h3>
                    <div className="contactInfo">
                        {getContactCard('Email', 'yucongkoo0214@gmail.com', 'mailto:yucongkoo0214@gmail.com')}
                        {getContactCard('WhatsApp', '+65-8890 7002', 'https://api.whatsapp.com/send?phone=+6588907002&text=Hey there, found your contact via your website!')}
                        {getContactCard('Email', 'yucongkoo0214@gmail.com', 'mailto:yucongkoo0214@gmail.com')}
                    </div>
                </div>

                {/* Right side */}
                <div className='contactContent'>
                    <h3 className="contactTitle">Write me</h3>

                    <form className='contactForm' ref={form} onSubmit={sendEmail}>
                        {getFormContent('name')}
                        {getFormContent('mail')}
                        {getFormContent('message')}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact