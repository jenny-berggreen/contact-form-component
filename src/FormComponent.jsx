import React from 'react';
import styles from './FormComponent.module.css'

const FormComponent = () => {
	return (
		<>
		<form className='contact-form'>
			<fieldset>
				<legend>Contact us</legend>

				<section>
					<div>
						<label htmlFor="firstName">First name<sup>*</sup></label>
						<input type="text" name='firstName' placeholder='Enter your first name' />
						<p>First name error</p>
					</div>
					<div>
						<label htmlFor="lastName">Last name<sup>*</sup></label>
						<input type="text" name='lastName' placeholder='Enter your last name' />
						<p>Last name error</p>
					</div>
				</section>

				<section>
					<div>
						<label htmlFor="email">E-mail<sup>*</sup></label>
						<input type="email" name='email' placeholder='Enter your e-mail' />
						<p>E-mail error</p>
					</div>
					<div>
						<label htmlFor="phoneNumber">Phone number<sup>*</sup></label>
						<input type="text" name='phoneNumber' placeholder='Enter your phone number' />
						<p>Phone number error</p>
					</div>
				</section>

				<div>
					<label htmlFor="subject">Subject<sup>*</sup></label>
					<input type="subject" name='subject' placeholder='Enter the subject (max 20 characters)' />
					<p>Subject error</p>
				</div>

				<div>
					<label htmlFor="message">Message<sup>*</sup></label>
					<textarea name="message" id="" cols="30" rows="10" placeholder='Enter your message (max 300 characters)'></textarea>
					<div>
						<p>Message error</p>
						<p>Message count</p>
					</div>
				</div>

				<button>Submit</button>
			</fieldset>
		</form>
		</>
	)
}

export default FormComponent;