import React, { useState } from "react"
import CountactUsForm from "../components/ContactUs/ContactUsForm"
import emailjs, { init } from "emailjs-com"

init("user_EP1niFzrjn0C8VpbdDmuU")
function CountactUs() {
	const [message, setMessage] = useState({
		firstName: "",
		lastName: "",
		email: "",
		text: ""
	})

	const handleFirstName = (e) => {
		const firstName = { ...message, firstName: e.target.value }
		setMessage(firstName)
	}
	const handleLastName = (e) => {
		const lastName = { ...message, lastName: e.target.value }
		setMessage(lastName)
	}
	const handleEmail = (e) => {
		const email = { ...message, email: e.target.value }
		setMessage(email)
	}
	const handleText = (e) => {
		const text = { ...message, text: e.target.value }
		setMessage(text)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		var templateParams = {
			to_name: "Find Yours Team",
			from_name: message.firstName + " " + message.lastName,
			from_email: message.email,
			message: message.text
		}

		emailjs.send("service_lzdqgo3", "template_l50r5np", templateParams).then(
			() => {
				setMessage({
					firstName: "",
					lastName: "",
					text: "",
					email: ""
				})
				alert("Success: Your message has been sent!")
			},
			function (error) {
				setMessage({
					firstName: "",
					lastName: "",
					text: "",
					email: ""
				})
				alert("Failed: Please try again!" + error)
			}
		)
	}
	return (
		<div>
			<CountactUsForm
				value={{
					firstName: message.firstName,
					lastName: message.lastName,
					email: message.email,
					text: message.text
				}}
				handleEmail={handleEmail}
				handleFirstName={handleFirstName}
				handleLastName={handleLastName}
				handleText={handleText}
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}

export default CountactUs
