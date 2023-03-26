import { createRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "../Styles/Contact.css";

export const Contact: React.FC = () => {
    const [ formState, setFormState ] = useState({name: '', email: '', body: '', 'g-recaptcha-response': ''})
    const [ sent, setSent ] = useState(false);
    const recaptchaRef = useRef<any>(null);

    const sendEmail = (token: any) => {     
        const params = {
            'name': formState.name,
            'email': formState.email,
            'message': formState.body,
            'g-recaptcha-response': token
        }

        console.log(formState)
        return emailjs.send('service_vezholj', 'template_f1t2o8n', params, '7TTWnhHTD2erGOiOE')
    }

    let body: any = null

    if (sent) {
        body = <h2 className="contact-header">Your message has been sent successfully</h2>
    } else {
        body = <div className="contact"><h3 className="contact-header"><div>If you wish to contact me,</div><div> please use the form below:</div></h3>
           <form id="contact-form" onSubmit={async (e) => {
                e.preventDefault()
                console.log("submitting");
                const captchaToken = await recaptchaRef.current?.getValue();
                recaptchaRef.current?.reset();
                console.log(captchaToken)
                setFormState({...formState, 'g-recaptcha-response': captchaToken})
                sendEmail(captchaToken)
                    .then((res) => {
                        console.log(res)
                        res.status == 200 ? setSent(true) : setSent(false)
                    }, (err) => {
                        console.error(err)
                    })
                
            }}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text" 
                        name="name" 
                        value={formState.name} 
                        onChange={(e) => {setFormState({...formState, 'name': e.target.value})}} 
                        placeholder="Your Name" 
                        className="form-control" 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email" 
                        name="email" 
                        value={formState.email} 
                        onChange={(e) => {setFormState({...formState, 'email': e.target.value})}}
                        placeholder="example@domain.com" 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                    name="body"
                    value={formState.body} 
                        onChange={(e) => {
                            setFormState({...formState, 'body': e.target.value})
                            console.log(formState)}} 
                    className="form-control" 
                    rows={Number(5)} 
                    required>

                </textarea>
                </div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Ld9zAEeAAAAALh89U9lw5FtZ1tw3VilFM-sKe71"
                    size="normal"
                    theme="dark"
                    hl="en"
                />
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