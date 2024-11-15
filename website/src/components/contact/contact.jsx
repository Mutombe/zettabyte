import React from 'react';
import Button from '../button/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';

const Input = ({ name, type = 'text', placeholder, ...props }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    );
};
  
const TextArea = ({ name, placeholder, ...props }) => {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        rows={4}
        className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    );
};
  


const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Name" />
              <Input name="email" type="email" placeholder="Email" />
              <TextArea name="message" placeholder="Message" />
              <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
                Submit
              </Button>
            </form>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-blue-500" />
              <a href="mailto:simbamtombe@gmail.com" className="text-blue-500 hover:underline">
                simbamtombe@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-blue-500" />
              <a href="tel:+263785948128" className="text-blue-500 hover:underline">
                +263 78 594 8128
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-500" />
              <p>Woodlands, Waterfalls, Harare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;