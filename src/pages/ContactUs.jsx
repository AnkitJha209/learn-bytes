import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/common/ContactForm'

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-lg mb-8">
          Have questions or feedback? We would love to hear from you!
        </p>
        <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Mail className="w-6 h-6 text-white" />
            <p>holmes.trevoraj@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Phone className="w-6 h-6 text-white" />
            <p>+91 828717 5051</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-white" />
            <p>123 LearnBytes Lane, Knowledge Park, Greater Noida</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;

