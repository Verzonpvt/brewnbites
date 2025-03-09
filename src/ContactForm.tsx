import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formbold.com/s/9XKk5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setFormData({ email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
    <Navbar />
    <div 
      className="min-h-screen bg-black text-white relative flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="w-full max-w-6xl mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Form Section */}
          <div className="backdrop-blur-xl bg-white/10 rounded-lg p-6 md:p-8 shadow-2xl border border-white/20 w-full max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-lg mb-2">
                  <Mail size={20} />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-lg mb-2">
                  <Phone size={20} />
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-lg mb-2">
                  <MessageSquare size={20} />
                  <span>Message</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-400 text-center py-2 bg-green-500/10 rounded-lg backdrop-blur-sm">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-center py-2 bg-red-500/10 rounded-lg backdrop-blur-sm">
                  Failed to send message. Please try again later.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Image Section - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80"
                alt="Contact us"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                  <p className="text-gray-200">We're here to help and answer any questions you might have.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}