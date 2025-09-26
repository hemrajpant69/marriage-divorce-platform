import { useState, useEffect } from 'react';
import SEO from "../components/SEO";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: "Adv. Rajesh Kumar",
      position: "Senior Legal Advisor",
      experience: "15+ Years",
      specialization: "Family Law & Civil Cases",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specialized in marriage registration and family dispute resolution with extensive courtroom experience.",
      social: {
        linkedin: "#",
        email: "mailto:rajesh@legalservice.com"
      }
    },
    {
      id: 2,
      name: "Adv. Priya Sharma",
      position: "Divorce Law Specialist",
      experience: "12+ Years",
      specialization: "Divorce & Alimony Cases",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert in divorce proceedings, child custody, and marital settlement agreements.",
      social: {
        linkedin: "#",
        email: "mailto:priya@legalservice.com"
      }
    },
    {
      id: 3,
      name: "Adv. Amit Singh",
      position: "Legal Documentation Expert",
      experience: "10+ Years",
      specialization: "Documentation & Verification",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specialized in legal documentation, verification processes, and government liaison.",
      social: {
        linkedin: "#",
        email: "mailto:amit@legalservice.com"
      }
    },
    {
      id: 4,
      name: "Sita Thapa",
      position: "Client Relationship Manager",
      experience: "8+ Years",
      specialization: "Client Support & Coordination",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Dedicated to providing exceptional client service and ensuring smooth case progression.",
      social: {
        linkedin: "#",
        email: "mailto:sita@legalservice.com"
      }
    }
  ];

  // Statistics Data
  const stats = [
    { number: "1000+", label: "Cases Handled", icon: "📊" },
    { number: "98%", label: "Success Rate", icon: "🎯" },
    { number: "15+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Client Support", icon: "🛡️" }
  ];

  return (
    <div className="about-page">
      <SEO 
        title="About Us - Nepal Legal Services" 
        description="Learn about our experienced legal team specializing in marriage and divorce cases in Nepal. 15+ years of expertise in family law."
      />

      {/* Hero Section */}
      <section className="about-hero position-relative overflow-hidden">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-6">
              <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
                <h1 className="display-3 fw-bold text-white mb-4">
                  About <span className="text-primary">Nepal Legal Services</span>
                </h1>
                <p className="lead text-light mb-5">
                  For over 15 years, we have been providing expert legal services in marriage 
                  and divorce matters across Nepal. Our team of experienced advocates ensures 
                  your legal journey is smooth, transparent, and successful.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <button className="btn btn-primary btn-lg px-4 py-3">
                    <i className="bi bi-telephone me-2"></i>Free Consultation
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4 py-3">
                    <i className="bi bi-download me-2"></i>Download Brochure
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-wrapper">
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Legal Team" 
                  className="img-fluid rounded-3 shadow-lg hero-img"
                />
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

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 col-6">
                <div className="text-center p-4 stat-card">
                  <div className="stat-icon mb-3">
                    <span style={{ fontSize: '3rem' }}>{stat.icon}</span>
                  </div>
                  <h3 className="fw-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-muted mb-0 fw-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="mission-card p-4 p-lg-5 h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-bullseye text-primary fs-2"></i>
                  </div>
                  <h3 className="h2 fw-bold text-dark mb-0">Our Mission</h3>
                </div>
                <p className="lead text-muted mb-4">
                  To provide accessible, transparent, and expert legal services that empower 
                  individuals navigating marriage and divorce proceedings in Nepal.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Client-centric approach in all legal matters
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Transparent pricing and process documentation
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Continuous support throughout the legal journey
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vision-card p-4 p-lg-5 h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-wrapper bg-success bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-eye text-success fs-2"></i>
                  </div>
                  <h3 className="h2 fw-bold text-dark mb-0">Our Vision</h3>
                </div>
                <p className="lead text-muted mb-4">
                  To become Nepal's most trusted legal service provider, setting new standards 
                  in family law practice through innovation and excellence.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="bi bi-star-fill text-warning me-2"></i>
                    Digital transformation of legal services
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-star-fill text-warning me-2"></i>
                    Nationwide accessibility to quality legal aid
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-star-fill text-warning me-2"></i>
                    Building lasting client relationships based on trust
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold text-dark mb-3">Meet Our Legal Experts</h2>
              <p className="lead text-muted">
                Our team of experienced advocates and legal professionals dedicated to your success
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="col-lg-6">
                <div className="team-card card border-0 shadow-lg h-100">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-4 text-center mb-3 mb-md-0">
                        <div className="team-image-wrapper position-relative">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="img-fluid rounded-circle shadow team-img"
                          />
                          <div className="experience-badge bg-primary text-white rounded-pill px-3 py-1">
                            {member.experience}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h4 className="fw-bold text-dark mb-2">{member.name}</h4>
                        <h6 className="text-primary mb-3">{member.position}</h6>
                        <p className="text-muted small mb-3">{member.specialization}</p>
                        <p className="text-muted mb-4">{member.description}</p>
                        
                        <div className="d-flex gap-3">
                          <a href={member.social.linkedin} className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-linkedin me-2"></i>Connect
                          </a>
                          <a href={member.social.email} className="btn btn-primary btn-sm">
                            <i className="bi bi-envelope me-2"></i>Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3 className="h1 fw-bold mb-3">Ready to Start Your Legal Journey?</h3>
              <p className="lead mb-0 opacity-75">
                Contact us today for a free consultation with our legal experts.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
                <button className="btn btn-light btn-lg px-4 py-3 fw-bold">
                  <i className="bi bi-telephone me-2"></i>Call Now
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3">
                  <i className="bi bi-whatsapp me-2"></i>WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .about-hero {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          padding: 100px 0;
          position: relative;
        }

        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          line-height: 0;
          color: #f8f9fa;
        }

        .hero-wave svg {
          width: 100%;
          height: 80px;
        }

        .hero-image-wrapper {
          position: relative;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          top: 60%;
          left: 80%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 40px;
          height: 40px;
          top: 30%;
          left: 70%;
          animation-delay: 4s;
        }

        .hero-img {
          animation: fadeInRight 1s ease-out;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .stat-card {
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .team-card {
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }

        .team-img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .team-card:hover .team-img {
          transform: scale(1.1);
        }

        .experience-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .mission-card, .vision-card {
          border-radius: 20px;
          transition: transform 0.3s ease;
        }

        .mission-card:hover, .vision-card:hover {
          transform: translateY(-5px);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 80px 0;
          }
          
          .display-3 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}