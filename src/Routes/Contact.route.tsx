import { useState } from "react";
import "../Styles/Contact.css"

export const Contact: React.FC = () => {
    const [ sent, setSent ] = useState(false);

    let body: any = null

    if (sent) {
        body = <h2 className="contact-header">Your message has been sent successfully</h2>
    } else {
        body = <div className="contact"><h3 className="contact-header"><div>If you wish to contact me,</div><div> please use the form below:</div></h3>
           <form id="contact-form" onSubmit={async (e) => {
                e.preventDefault()
                console.log(e)
                setSent(true)
            }}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Your Name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" placeholder="example@domain.com" className="form-control" aria-describedby="emailHelp" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows={Number(5)} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
    }

    return(
        <div className="body-container">
            {body}
        </div>
    );
};