import React, { useRef } from 'react';
import './Contact.css';
import { MdMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ev812ee',
            'template_34otz5g',
            form.current,
            'Wh89TBfDhTzgE4oPk'
        )
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again.");
            });

        e.target.reset();  // Reset the form after submission
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="input-group">
                    <input type="text" id="name" name="name" placeholder="Full Name" required />
                    <input type="email" id="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="input-group">
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                    <input type="text" id="subject" name="subject" placeholder="Subject" required />
                </div>
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" className="send-message">Send Message</button>
            </form>

            {/* Contact Info with Icons */}
            <div className="contact-info">
                <a
                    href="mailto:dada.deepesh@gmail.com?subject=Contact%20Request&body=Hello%20Deepesh,"
                    className="contact-icon"
                    aria-label="Email">
                    <span className='icons'> <MdMarkEmailRead /></span>
                    <span>dada.deepesh@gmail.com</span>
                </a>
                <a href="tel:+919407881817" className="contact-icon" aria-label="Phone">
                    <span className='icons'> <IoCall /></span>
                    <span>+91 94078 81817</span>
                </a>
                <a href="tel:+919407881817" className="contact-icon" aria-label="Phone">
                    <span className='icons'> <MdHomeWork /></span>
                    <span>Tirunelveli,Tamil Nadu,India</span>
                </a>
                <a href="https://github.com/deepesh1507" className="contact-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <span className='icons'> <FaGithub /></span>
                </a>
                <a href="https://www.linkedin.com/in/deepesh-patel-993793221/" className="contact-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <span className='icons'> <FaLinkedin /></span>
                </a>
            </div>

            {/* Copyright */}
            <p className="copyright">© 2024 Deepesh, All Rights Reserved</p>
        </section>
    );
};

export default Contact;