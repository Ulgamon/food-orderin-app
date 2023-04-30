import React from "react";
import fb from '../../static/fb.svg';
import wp from '../../static/wp.svg';
import ig from '../../static/ig.svg';

const Footer = props => {
    return (
        <footer className="bg-stone-700">
            <div className="w-full flex flex-wrap text-stone-100 justify-center">
                <div className="text-center mx-10">
                    <h4 className="text-3xl mt-10 mb-5">Contact Us</h4>
                    <p className="">Monday - Friday 7:00 AM - 9:00 PM |</p>
                    <p className="">Saturday 7:00 AM - 6:00 PM</p>
                    <p className=""><strong>Phone:</strong> (677) 432-0978</p>
                    <p className=""><strong>Email: </strong>pizzolino@pizza.com</p>
                    <strong className="m-3">Address:</strong>
                    <p className="">35 Orange St.</p>
                    <p className="mb-2">Ravenna, OH 44266</p>
                </div>
                <div className="text-center mx-10">
                    <h4 className="text-3xl mt-10 mb-5">Follow Us</h4>
                    <div className="flex justify-center mb-5">
                        <a className="m-3" href="https://www.facebook.com"><img src={fb} alt="facebook icon"/></a>
                        <a className="m-3" href="https://www.instagram.com"><img src={ig} alt="instagram icon"/></a>
                        <a className="m-3" href="https://www.whatsapp.com"><img src={wp} alt="whatsapp icon"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;