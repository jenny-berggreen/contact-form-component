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

	// validation function
	const validateForm = () => {
		const clonedError = {...errors};

		if(!userData.firstName.trim()) { // if empty
			clonedError.firstNameError = 'First name is required!';
		} else if(userData.firstName.length > 20) {
			clonedError.firstNameError = 'Maximum characters allowed is 20!';
		}

		if(!userData.lastName.trim()) { // if empty
			clonedError.lastNameError = 'Last name is required!';
		} else if(userData.lastName.length > 20) {
			clonedError.lastNameError = 'Maximum characters allowed is 20!';
		}

		if(!userData.email.trim()) { // if empty
			clonedError.emailError = 'E-mail is required!';
		}

		if(userData.phoneNumber) { // if there is a phone number
			if(userData.phoneNumber.length !== 8) { // if number is not 8 digits
				clonedError.phoneNumberError = 'Phone number must be 8 digits!'
			}
		}

		if(!userData.subject.trim()) { // if empty
			clonedError.subjectError = 'Subject is required!';
		} else if(userData.subject.length > 20) {
			clonedError.subjectError = 'Maximum characters allowed is 20!';
		}

		if(!userData.message.trim()) { // if empty
			clonedError.messageError = 'Message is required!';
		} 
		
		setErrors(clonedError); // update errors state
	}

	// store data
	const handleChange = (e) => {
		const {name, value} = e.target; // access name and value

		setErrors((prevErrors) => ({...prevErrors, [`${name}Error`]: ''}))

		setUserData((prev) => ({...prev, [name]: value}));

		if (name === 'message' && value.length >= 300) {
			setErrors(prev => ({...prev, messageError: 'Maximum characters allowed is 300!'}));
		}
	}

	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		validateForm();
	}

	return (
		<>
		<form className={styles.contact_form} onSubmit={handleSubmit}>
			<fieldset className={styles.contact_form_container}>
				<legend>Contact us</legend>

				<section className={styles.name_section}>
					<div className={styles.input_group}>
						<label htmlFor="firstName">First name<sup>*</sup></label>
						<input type="text" name='firstName' placeholder='Enter your first name' className={styles.input_element} onChange={handleChange} />
						<p>{errors.firstNameError}</p>
					</div>
					<div className={styles.input_group}>
						<label htmlFor="lastName">Last name<sup>*</sup></label>
						<input type="text" name='lastName' placeholder='Enter your last name' className={styles.input_element} onChange={handleChange} />
						<p>{errors.lastNameError}</p>
					</div>
				</section>

				<section className={styles.contact_section}>
					<div className={styles.input_group}>
						<label htmlFor="email">E-mail<sup>*</sup></label>
						<input type="email" name='email' placeholder='Enter your e-mail' className={styles.input_element} onChange={handleChange} />
						<p>{errors.emailError}</p>
					</div>
					<div className={styles.input_group}>
						<label htmlFor="phoneNumber">Phone number<sup>*</sup></label>
						<input type="text" name='phoneNumber' placeholder='Enter your phone number' className={styles.input_element} onChange={handleChange} />
						<p>{errors.phoneNumberError}</p>
					</div>
				</section>

				<div className={styles.input_group}>
					<label htmlFor="subject">Subject<sup>*</sup></label>
					<input type="subject" name='subject' placeholder='Enter the subject (max 20 characters)' className={styles.input_element} onChange={handleChange} />
					<p>{errors.subjectError}</p>
				</div>

				<div className={styles.input_group}>
					<label htmlFor="message">Message<sup>*</sup></label>
					<textarea 
						name="message" 
						cols="30" 
						rows="10" 
						maxLength={300}
						placeholder='Enter your message (max 300 characters)' 
						className={styles.textarea_element}
						ref={textAreaElement}
						onChange={handleChange}
					></textarea>
					<div className={styles.message_error_and_count}>
						<p>{errors.messageError}</p>
						<p>Message count: {textAreaElement.current ? textAreaElement.current.value.length : 0} / 300</p>
					</div>
				</div>

				<button className={styles.submit_button}>Submit</button>
			</fieldset>
		</form>
		</>
	)
}

export default FormComponent;