// import { useState } from "react"
import { useImmer } from "use-immer"

export default function ContactForm() {
    const [contact, setContact] = useImmer({
        name: "",
        message: "",
    })

    const handleNameChange = (event) => {
        setContact((draft) => {
            draft.name = event.target.value
        })
    }

    const handleMessageChange = (event) => {
        setContact((draft) => {
            draft.message = event.target.value
        })
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form action="">
                <input type="text" placeholder="name" value={contact.name} onChange={handleNameChange} />
                <input type="text" placeholder="message" value={contact.message} onChange={handleMessageChange} />
            </form>

            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </div>
    )
}
