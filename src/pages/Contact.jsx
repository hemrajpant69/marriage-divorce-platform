import { useState, useEffect } from 'react';
import SEO from "../components/SEO";
export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

*Sent via Website Contact Form*
    `.trim();

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/9779809437032?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Show success message
      alert('Thank you! Your message has been prepared for WhatsApp. Please send it to our team.');
    }, 2000);
  };

  const contactMethods = [
    {
      icon: 'bi-telephone-fill',
      title: 'Phone Support',
      details: '+977 9809437032',
      description: 'Mon-Sun: 7:00 AM - 10:00 PM',
      color: 'primary',
      link: 'tel:+9779809437032'
    },
    {
      icon: 'bi-whatsapp',
      title: 'WhatsApp',
      details: '+977 9809437032',
      description: '24/7 Instant Messaging',
      color: 'success',
      link: 'https://wa.me/9779809437032'
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      details: 'info@nepallegalservice.com',
      description: 'Response within 2 hours',
      color: 'info',
      link: 'mailto:info@nepallegalservice.com'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Office',
      details: 'Kathmandu, Nepal',
      description: 'Visit by appointment',
      color: 'warning',
      link: '#'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Emergency Only' }
  ];

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us - Nepal Legal Services" 
        description="Get in touch with our legal experts for marriage and divorce consultation. Phone, WhatsApp, and email support available."
      />

      {/* Hero Section */}
      <section className="contact-hero position-relative overflow-hidden">
        <div className="container">
          <div className="row min-vh-80 align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
                <h1 className="display-3 fw-bold text-white mb-4">
                  Get In <span className="text-primary">Touch</span>
                </h1>
                <p className="lead text-light mb-5">
                  Ready to start your legal journey? Our expert team is here to provide 
                  personalized consultation and guide you through every step.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <a href="tel:+9779809437032" className="btn btn-primary btn-lg px-4 py-3">
                    <i className="bi bi-telephone me-2"></i>Call Now
                  </a>
                  <a href="https://wa.me/9779809437032" className="btn btn-success btn-lg px-4 py-3">
                    <i className="bi bi-whatsapp me-2"></i>WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {contactMethods.map((method, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <a 
                  href={method.link} 
                  className={`contact-method-card card border-0 shadow-sm h-100 text-decoration-none text-dark ${method.color}`}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className="card-body text-center p-4">
                    <div className={`icon-wrapper bg-${method.color} bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3`}>
                      <i className={`bi ${method.icon} text-${method.color} fs-2`}></i>
                    </div>
                    <h5 className="fw-bold mb-2">{method.title}</h5>
                    <p className={`text-${method.color} fw-semibold mb-2`}>{method.details}</p>
                    <p className="text-muted small mb-0">{method.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <div className="section-header mb-5">
                  <h2 className="display-5 fw-bold text-dark mb-3">Send us a Message</h2>
                  <p className="lead text-muted">
                    Fill out the form below and we'll contact you within 2 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="name">
                          <i className="bi bi-person me-2"></i>Full Name *
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="email">
                          <i className="bi bi-envelope me-2"></i>Email Address *
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="+977 9809437032"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="phone">
                          <i className="bi bi-phone me-2"></i>Phone Number *
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Subject</option>
                          <option value="Marriage Registration">Marriage Registration</option>
                          <option value="Divorce Consultation">Divorce Consultation</option>
                          <option value="Legal Advice">Legal Advice</option>
                          <option value="Documentation Help">Documentation Help</option>
                          <option value="Other">Other</option>
                        </select>
                        <label htmlFor="subject">
                          <i className="bi bi-chat-dots me-2"></i>Subject *
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Your message..."
                          rows="6"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                        <label htmlFor="message">
                          <i className="bi bi-pencil me-2"></i>Your Message *
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5 py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Preparing WhatsApp Message...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-whatsapp me-2"></i>
                            Send via WhatsApp
                          </>
                        )}
                      </button>
                      <p className="text-muted small mt-2">
                        * Your message will be sent directly to our WhatsApp for immediate response
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4">
              <div className="contact-info-sidebar">
                <div className="info-card card border-0 shadow-lg sticky-top">
                  <div className="card-body p-4">
                    <h4 className="fw-bold text-dark mb-4">Contact Information</h4>
                    
                    <div className="info-item mb-4">
                      <div className="d-flex align-items-start">
                        <div className="icon-wrapper bg-primary bg-opacity-10 p-2 rounded me-3">
                          <i className="bi bi-clock text-primary fs-5"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-2">Office Hours</h6>
                          {officeHours.map((schedule, index) => (
                            <div key={index} className="d-flex justify-content-between mb-1">
                              <span className="text-muted small">{schedule.day}</span>
                              <span className="fw-semibold small">{schedule.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="info-item mb-4">
                      <div className="d-flex align-items-start">
                        <div className="icon-wrapper bg-success bg-opacity-10 p-2 rounded me-3">
                          <i className="bi bi-lightning-charge text-success fs-5"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-2">Quick Response</h6>
                          <p className="text-muted small mb-0">
                            WhatsApp messages typically answered within 15 minutes during business hours
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="d-flex align-items-start">
                        <div className="icon-wrapper bg-info bg-opacity-10 p-2 rounded me-3">
                          <i className="bi bi-shield-check text-info fs-5"></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-2">Confidentiality</h6>
                          <p className="text-muted small mb-0">
                            All conversations are protected by attorney-client privilege
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="emergency-contact mt-4 p-3 bg-danger bg-opacity-10 rounded">
                      <h6 className="fw-bold text-danger mb-2">
                        <i className="bi bi-exclamation-triangle me-2"></i>
                        Emergency Legal Assistance
                      </h6>
                      <p className="small text-muted mb-2">Available 24/7 for urgent matters</p>
                      <a href="tel:+9779809437032" className="btn btn-danger btn-sm w-100">
                        <i className="bi bi-telephone me-2"></i>Emergency Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
    <section className="py-5 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="map-card card border-0 shadow-lg">
          <div className="card-body p-0">
            <div className="row g-0">
              {/* Location Info */}
              <div className="col-md-6 p-4">
                <h4 className="fw-bold text-dark mb-3">Our Location</h4>
                <div className="location-info">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Main Office</h6>
                      <p className="text-muted mb-0">Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-building text-primary fs-4 me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Visit Us</h6>
                      <p className="text-muted mb-0">By appointment only</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-parking text-primary fs-4 me-3"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Parking</h6>
                      <p className="text-muted mb-0">Available on premises</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="col-md-6">
                <div className="map-placeholder h-100 d-flex align-items-center justify-content-center bg-primary bg-opacity-5">
                  <div className="w-100 h-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.98568747035!2d85.32203365136137!3d27.702065609122613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a1a6131fb1%3A0xf4a1a2e3422291fb!2sGhattekulo%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1758908336957!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "350px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* End Map Section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}