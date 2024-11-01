import React from 'react'
import './Contact.css'
import email from '../../assets/email.png'
import smartphone from '../../assets/smartphone.png'
import location from '../../assets/location.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import star from '../../assets/network.png'
import arrow_right from '../../assets/arrow-right.png'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15ffbcc8-d734-4154-b42e-b78293f79dea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Connect With Me</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Architecto recusandae saepe quae in laboriosam officiis distinctio 
            laudantium dolorem quaerat voluptatibus dolor at quos molestias, 
            quod perspiciatis deserunt, vel error laborum.</p> */}
        <ul>
        <li><img src={github} alt="" /><a href="https://github.com/nepal-manjil32" target='_blank'>Github</a></li>
        <li><img src={linkedin} alt="" /><a href="https://www.linkedin.com/in/manjil-nepal/" target='_blank'>Linkedin</a></li>
        <li><img src={email} alt="" /> nepal.manjil3294@gmail.com</li>
        <li><img src={smartphone} alt="" /> +977-9876543212</li>
        <li><img src={location} alt="" />Permanent: Bhadrapur, Jhapa, Koshi Province, Nepal</li>
        <li><img src={location} alt="" />Current: Amaravati, Andhra Pradesh, India 522240</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label for='name'>Your Name</label>
            <input type="text" name='name' placeholder='Enter you full name' required/>
            <label for='phone'>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter you phone number' required/>
            <label for='phone'>Write your message here</label>
            <textarea name="message" rows='10' placeholder='Enter you message' required></textarea>
            <button type='submit' className='btn btn-dark btn-hover2'>Submit <img src={arrow_right} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
