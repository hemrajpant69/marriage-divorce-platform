import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import heroImage from "../assets/hero.png"; 
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="container-fluid px-0">
      <SEO
        title="Marriage & Divorce in Nepal"
        description="Learn about Nepal's Marriage and Divorce laws, regulations, and apply online."
      />
       <WhatsAppFloat />

        <section className="bg-light py-5 position-relative overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold text-dark mb-3">
                Nepal Legal Services Portal
              </h1>
              <p className="lead text-muted mb-4">
                Comprehensive legal information and services for marriage and divorce matters in Nepal. 
                Trusted by thousands for expert guidance and support.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success fs-5 me-2"></i>
                  <span className="text-muted">Expert Legal Advice</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success fs-5 me-2"></i>
                  <span className="text-muted">Fast Processing</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success fs-5 me-2"></i>
                  <span className="text-muted">24/7 Support</span>
                </div>
              </div>
             <button
  className="btn btn-primary btn-lg px-4 py-2 d-flex align-items-center"
  onClick={() => (window.location.href = "tel:+9779809437032")}
>
  <i className="bi bi-telephone me-2"></i>
  Consult with Expert
</button>

            </div>
            
            {/* Hero Image Column - Added efficiently */}
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src={heroImage} 
                  alt="Marriage & Divorce Legal Services" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-10 rounded-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-3 col-6">
              <div className="p-3">
                <h3 className="fw-bold text-primary mb-1">500+</h3>
                <p className="text-muted mb-0">Cases Processed</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <h3 className="fw-bold text-success mb-1">98%</h3>
                <p className="text-muted mb-0">Success Rate</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <h3 className="fw-bold text-info mb-1">24/7</h3>
                <p className="text-muted mb-0">Support Available</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <h3 className="fw-bold text-warning mb-1">15+</h3>
                <p className="text-muted mb-0">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-3">Our Legal Services</h2>
              <p className="lead text-muted">
                Professional legal assistance for marriage and divorce matters in Nepal
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg h-100 hover-shadow">
                <div className="card-header bg-primary bg-opacity-10 border-0 py-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary text-white p-3 rounded-circle me-3">
                      <i className="bi bi-heart-fill fs-4"></i>
                    </div>
                    <div>
                      <h3 className="h4 mb-0 text-primary">Marriage in Nepal</h3>
                      <p className="text-muted mb-0">Complete legal registration process</p>
                    </div>
                    <span className="badge bg-primary ms-auto">Most Popular</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <p className="card-text text-muted mb-4">
                    Comprehensive guidance on marriage registration, legal requirements, documentation, 
                    and procedures according to Nepalese law. Our experts ensure a smooth and efficient process.
                  </p>
                  
                  <h5 className="mb-3">Key Services:</h5>
                  <div className="row mb-4">
                    <div className="col-sm-6">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Eligibility Verification
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Document Preparation
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Registration Assistance
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Legal Consultation
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2">
                    <Link to="/marriage" className="btn btn-primary px-4">
                      <i className="bi bi-info-circle me-2"></i>Learn More
                    </Link>
                    <button className="btn btn-outline-primary px-4">
                      <i className="bi bi-download me-2"></i>Checklist
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-lg h-100 hover-shadow">
                <div className="card-header bg-danger bg-opacity-10 border-0 py-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-danger text-white p-3 rounded-circle me-3">
                      <i className="bi bi-heartbreak-fill fs-4"></i>
                    </div>
                    <div>
                      <h3 className="h4 mb-0 text-danger">Divorce in Nepal</h3>
                      <p className="text-muted mb-0">Professional legal support</p>
                    </div>
                    <span className="badge bg-danger ms-auto">Expert Support</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <p className="card-text text-muted mb-4">
                    Comprehensive legal support for divorce proceedings, rights protection, 
                    and settlement agreements in accordance with Nepalese law. We prioritize 
                    your well-being throughout the process.
                  </p>
                  
                  <h5 className="mb-3">Key Services:</h5>
                  <div className="row mb-4">
                    <div className="col-sm-6">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Legal Counseling
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Documentation Support
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Court Representation
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Settlement Negotiation
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2">
                    <Link to="/divorce" className="btn btn-danger px-4">
                      <i className="bi bi-info-circle me-2"></i>Learn More
                    </Link>
                    <button className="btn btn-outline-danger px-4">
                      <i className="bi bi-chat-dots me-2"></i>Legal Advice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold text-dark mb-3">Why Choose Our Services</h2>
              <p className="lead text-muted">
                We provide exceptional legal services with a focus on client satisfaction
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-4 d-inline-flex mb-3">
                  <i className="bi bi-shield-check fs-1"></i>
                </div>
                <h4 className="h5 fw-bold mb-3">Legal Expertise</h4>
                <p className="text-muted">
                  Our team consists of experienced legal professionals specializing in family law with proven track records.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-success bg-opacity-10 text-success rounded-circle p-4 d-inline-flex mb-3">
                  <i className="bi bi-clock-history fs-1"></i>
                </div>
                <h4 className="h5 fw-bold mb-3">Time Efficient</h4>
                <p className="text-muted">
                  Streamlined processes and digital solutions to ensure your legal matters are handled promptly and efficiently.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4">
                <div className="bg-info bg-opacity-10 text-info rounded-circle p-4 d-inline-flex mb-3">
                  <i className="bi bi-headset fs-1"></i>
                </div>
                <h4 className="h5 fw-bold mb-3">24/7 Support</h4>
                <p className="text-muted">
                  Round-the-clock customer support to address your queries and concerns whenever you need assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h3 className="h2 fw-bold mb-3">Need Immediate Legal Assistance?</h3>
              <p className="lead mb-0 opacity-75">
                Contact our legal experts today for personalized guidance and support.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
                <button className="btn btn-light btn-lg px-4">
                  <i className="bi bi-telephone me-2"></i>Call Now
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-chat-dots me-2"></i>Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}