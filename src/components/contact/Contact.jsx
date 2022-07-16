import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5pvokvo', 'template_bangtpt', form.current, 'TtZbv4Uq8HVS8ScBb')
        e.target.reset()
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <contact id="contact">
            <h2>Contact</h2>
            <div class="container">
                <form ref={form} onSubmit={sendEmail} class="scroll-element js-scroll fade-in">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea placeholder="" name="message"  ></textarea>
                    <button type="submit" class="">Send Message</button>
                </form>
            </div>
        </contact>
    )
}

export default Contact
