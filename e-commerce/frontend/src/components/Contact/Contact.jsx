
import Policy from '../Layout/Policy/Policy'
import './Contact.css'
function Contact() {
    return (
        <section className="contact">
            <div className="contact-top">
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps?q=Ayd%C4%B1nevler%2C+Marmara+%C3%9Cniversitesi+Teknoloji+Fak%C3%BCltesi+Giri%C5%9Fi%2C+%C4%B0dealtepe+Yolu+No%3A17%2C+34854+Maltepe%2F%C4%B0stanbul%2C+T%C3%BCrkiye&ftid=0x14cac7b554e4091d%3A0xc3dacb58d8c29635&entry=gps&lucs=&output=embed"
                        width="100%" height="500" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="contact-bottom">
                <div className="container">
                    <div className="contact-titles">
                        <h4>Contact with us</h4>
                        <h2>Get In Touch</h2>
                        <p>In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna
                            mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur
                            consequat justo.</p>
                    </div>
                    <div className="contact-elements">
                        <form className="contact-form">
                            <div className="">
                                <label>
                                    Your Name
                                    <span>*</span>
                                </label>
                                <input type="text" required />
                            </div>
                            <div className="">
                                <label>
                                    Your email
                                    <span>*</span>
                                </label>
                                <input type="text" required />
                            </div>
                            <div className="">
                                <label>
                                    Subject
                                    <span>*</span>
                                </label>
                                <input type="text" required />
                            </div>
                            <div className="">
                                <label>
                                    Your message
                                    <span>*</span>
                                </label>
                                <textarea id="author" name="author" type="text" defaultValue="" size="30" required=""></textarea>
                            </div>
                            <button className="btn btn-sm form-button">Send Message</button>
                        </form>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-texts">
                                    <strong> Clotya Store</strong>
                                    <p className="contact-street">
                                        Clotya Store
                                        Germany — 785 15h Street, Office 478/B Green Mall Berlin, De 81566</p>
                                    <a href="tel:Phone: +1 1234 567 88">Phone: +1 1234 567 88</a>
                                    <a href="mailto:Email: contact@example.com">Email: contact@example.com</a>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-texts">
                                    <strong> Opening Hours</strong>
                                    <p className="contact-date">
                                        Monday - Friday : 9am - 5pm</p>
                                    <p>Weekend Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Policy/>
        </section>
    )
}

export default Contact