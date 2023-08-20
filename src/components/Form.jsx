import React, { useState } from "react";

const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
        state: "",
        city: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <>
            <section>
            <section>
                <img src="" alt="addimage" />
            </section>
                <div className="container">
                    <h1 className="text-white">Contact us</h1>

                    <div className="contact-content-inside">
                        <ul className="row">
                            <li className="col-md-4 col-sm-12 align-self-center">
                                You can get in touch at the addresses and telephone numbers mentioned or fill in the form to contact us.
                            </li>

                            <li className="col-md-4 col-sm-12">
                                <div className="bg-white border border-radius-5 border-bottom-0">
                                    <h5 className="text-uppercase font-weight-bold mb-1">Registered Office</h5>
                                    <p className="mb-1">Bombay House, 24, Homi Mody Street, <br />Mumbai 400 001, India</p>
                                    <p className="mb-2 w-icon w-icon-black i-call">+91 - 22 - 6665 8282</p>
                                    <p className="mb-2 w-icon w-icon-black i-mail"><a href="mailto:talktous@tatatrusts.org">talktous@tatatrusts.org</a></p>
                                </div>
                            </li>

                            <li className="col-md-4 col-sm-12">
                                <div className="bg-white border border-radius-5 border-bottom-0">
                                    <h5 className="text-uppercase font-weight-bold mb-1">Support office</h5>
                                    <p className="mb-2">World Trade Center-1, 26th floor<br />Cuffe Parade, Mumbai 400 005, India</p>
                                    <p className="mb-2 w-icon w-icon-black i-call">+91 - 22 - 6135 8282</p>
                                    <p className="mb-2 w-icon w-icon-black i-mail"><a href="mailto:talktous@tatatrusts.org">talktous@tatatrusts.org</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <form method="post" onSubmit={handleSubmit}>
                    <h1>Contact <span>Us</span></h1>
                    <input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Enter your full name" required />
                    <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="xyz@gmail.com" required />
                    <input type="text" name="state" onChange={handleChange} value={data.state} placeholder="State" required />
                    <input type="text" name="city" onChange={handleChange} value={data.city} placeholder="City" required />
                    <input type="tel" name="phone" onChange={handleChange} value={data.phone} placeholder="Phone number (optional)" />
                    <textarea name="message" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="Type your message here..." required />

                    <button type="submit">Submit</button>
                </form>
            </section>

            <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7505191.250260705!2d72.14717736929796!3d23.292375867405138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398da934d2d9da5b%3A0x6119226bcfec4bad!2sHOTEL%20YASH!5e0!3m2!1sen!2sin!4v1688574970960!5m2!1sen!2sin"
         width={"100%"} height={"350"}
         allowfullscreen=""
         title='contact'
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade">
         </iframe>
      </section>
        </>
    );
};

export default Form;
