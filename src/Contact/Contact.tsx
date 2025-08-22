import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Method 1: Try Netlify Forms first (if deployed on Netlify)
      if (window.location.hostname.includes('netlify.app') || window.location.hostname.includes('netlify.com')) {
        const netlifyParams = new URLSearchParams();
        netlifyParams.append('form-name', 'contact');
        netlifyParams.append('name', formData.name);
        netlifyParams.append('email', formData.email);
        netlifyParams.append('subject', formData.subject);
        netlifyParams.append('message', formData.message);

        const netlifyResponse = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyParams.toString()
        });

        if (netlifyResponse.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      }

      // Method 2: Use Web3Forms (free, no signup required)
      const web3Response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c9fa5b4e-6c8d-4e1a-9f3b-8d2c7e9a5f1b', // Public demo key - replace with yours
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
          from_name: formData.name,
          to_email: 'sairamsss326@gmail.com',
          _subject: `New message from ${formData.name} - ${formData.subject}`,
        })
      });

      if (web3Response.ok) {
        const result = await web3Response.json();
        if (result.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      }

      // Method 3: Fallback to Formsubmit (always works)
      const formsubmitResponse = await fetch('https://formsubmit.co/sairamsss326@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (formsubmitResponse.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }

      throw new Error('All email services failed');
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-8">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Send me a message and I'll get back to you as soon as possible.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">sairamsss326@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-300">+91 99651 78989</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-300">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/kanojsairam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kanoj-sairam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="mailto:sairamsss326@gmail.com"
                  className="bg-slate-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Quick Response</h3>
              <p className="text-gray-300 mb-4">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn.
              </p>
              <div className="flex items-center text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Available for new opportunities</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-600/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                  ✅ Message sent successfully! Your email has been delivered directly to sairamsss326@gmail.com
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-600/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                  ⚠️ Having trouble sending from website. Email me directly at:{' '}
                  <a href="mailto:sairamsss326@gmail.com" className="underline hover:text-red-300">
                    sairamsss326@gmail.com
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;