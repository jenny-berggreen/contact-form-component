import React, { useRef, useState } from 'react';
import styles from './FormComponent.module.css'
import appStyles from './App.module.css'

const FormComponent = () => {

	// user data object
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		subject: '',
		message: ''
	});

	// errors object
	const [errors, setErrors] = useState({
		firstNameError: '',
		lastNameError: '',
		emailError: '',
		phoneNumberError: '',
		subjectError: '',
		messageError: '',
	});

	// text area
	const textAreaElement = useRef(null);

	return (
		<>
		<form className={styles.contact_form}>
			<fieldset className={styles.contact_form_container}>
				<legend>Contact us</legend>

				<section className={styles.name_section}>
					<div className={styles.input_group}>
						<label htmlFor="firstName">First name<sup>*</sup></label>
						<input type="text" name='firstName' placeholder='Enter your first name' className={styles.input_element} />
						<p>First name error</p>
					</div>
					<div className={styles.input_group}>
						<label htmlFor="lastName">Last name<sup>*</sup></label>
						<input type="text" name='lastName' placeholder='Enter your last name' className={styles.input_element} />
						<p>Last name error</p>
					</div>
				</section>

				<section className={styles.contact_section}>
					<div className={styles.input_group}>
						<label htmlFor="email">E-mail<sup>*</sup></label>
						<input type="email" name='email' placeholder='Enter your e-mail' className={styles.input_element} />
						<p>E-mail error</p>
					</div>
					<div className={styles.input_group}>
						<label htmlFor="phoneNumber">Phone number<sup>*</sup></label>
						<input type="text" name='phoneNumber' placeholder='Enter your phone number' className={styles.input_element} />
						<p>Phone number error</p>
					</div>
				</section>

				<div className={styles.input_group}>
					<label htmlFor="subject">Subject<sup>*</sup></label>
					<input type="subject" name='subject' placeholder='Enter the subject (max 20 characters)' className={styles.input_element} />
					<p>Subject error</p>
				</div>

				<div className={styles.input_group}>
					<label htmlFor="message">Message<sup>*</sup></label>
					<textarea 
						name="message" 
						cols="30" 
						rows="10" 
						placeholder='Enter your message (max 300 characters)' 
						className={styles.textarea_element}
						ref={textAreaElement}
					></textarea>
					<div className={styles.message_error_and_count}>
						<p>Message error</p>
						<p>Message count</p>
					</div>
				</div>

				<button className={styles.submit_button}>Submit</button>
			</fieldset>
		</form>
		</>
	)
}

export default FormComponent;