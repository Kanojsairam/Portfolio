import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, User, AtSign } from 'lucide-react';

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
          access_key: '9c5f7e4d-8b3a-4f2e-9d1c-6e8a2b4c7f1a', // Free demo key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          to_name: 'Kanojsairam S A'
        })
      });

      if (web3Response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }

      // Method 3: Use Formspree as backup
      const formspreeResponse = await fetch('https://formspree.io/f/xpwangzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (formspreeResponse.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('All submission methods failed');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next project or collaboration? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">kanojsairam2003@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/kanojsairam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/kanojsairam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600">Usually reply within 24 hours</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Available for Work</h3>
                <p className="text-sm text-gray-600">Open to new opportunities</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6" name="contact" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-300 rounded-xl">
                  <p className="text-green-800 font-medium">✅ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-300 rounded-xl">
                  <p className="text-red-800 font-medium">❌ Failed to send message. Please try again or contact me directly via email.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12 border border-indigo-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prefer Direct Contact?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Feel free to reach out directly through email or give me a call. 
              I'm always excited to discuss new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kanojsairam2003@gmail.com"
                className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-xl border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a 
                href="tel:+919876543210"
                className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
