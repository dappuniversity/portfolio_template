

const Contact = () => {
    return (
        <div className="contact-form">
            <form action="https://formsubmit.co/damon.pickett@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Your name" />
                <input type="text" name="company" placeholder="Your company" />
                <input type="email" name="email" placeholder="Your email address" required />
                <input type="text" name="telephone" placeholder="Your phone #" />
                <input type="hidden" name="_next" value="https://damonpickett.github.io/damonpickett/thankyou.html" />
                <input type="hidden" name="_subject" value="New enquiry from portfolio site" />
                <textarea name="message" rows="5" placeholder="How can I help you?"></textarea>
                <button className='form-button' type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;