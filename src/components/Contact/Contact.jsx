import React, { useState } from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setStatus("Submitting form...");

        const form = new URLSearchParams();
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("phone", formData.phone);
        form.append("message", formData.message);

        try {
            const response = await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: form.toString(),
            });

            if (response.ok) {
                setStatus("Form data saved successfully!");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setStatus("Failed to save form data.");
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus("Failed to save form data.");
        }
    };

    return (
        <footer id='contact' className={styles.container}>
            <div>
                <div className={styles.text}>
                    <h2>Contact</h2>
                    <p>Feel free to reach out!</p>
                </div>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formfield}>
                            <label htmlFor="name">Name :</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formfield}>
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formfield}>
                            <label htmlFor="phone">Phone No :</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <div className={styles.formfield}>
                                <label htmlFor="message">Message :</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">Submit</button>
                            {status && <p className="status-message">{status}</p>}
                        </div>
                    </form>
                </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                        <a href="mailto:bhumildobariya88@gmailcom">Email</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin" />
                        <a href="https://www.linkedin.com/in/bhumil-dobariya-6bb141293">LinkedIn</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
                        <a href="https://github.com/Bhumil0808">GitHub</a>
                    </li>
                </ul>

            </div>
        </footer>
    )
}
