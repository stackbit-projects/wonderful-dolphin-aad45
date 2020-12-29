import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <section>
                <form id="contactForm" name="contactForm" method="post" action="#" netlifyHoneypot="bot-field" data-netlify="true">
                    <div className="screen-reader-text">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </div>
                    <div className="fields">
                        <div className="field half"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div className="field half"><input type="email" name="email" id="email" placeholder="Email" /></div>
                        <div className="field"><textarea name="message" id="message" placeholder="Message" rows="4" /></div>
                    </div>
                    <input type="hidden" name="form-name" value="contactForm" />
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li>
                    </ul>
                </form>
            </section>
        );
    }
}
