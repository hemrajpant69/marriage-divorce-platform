import SEO from "../components/SEO";
import { useState } from "react";
import WhatsAppFloat from "../components/WhatsAppFloat";
export default function Marriage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container-fluid px-0">
      <SEO 
        title="Marriage Laws in Nepal | Registration Process & Requirements" 
        description="Complete guide to marriage laws, registration process, legal requirements, and rights in Nepal. Professional assistance for marriage registration." 
      />
      <WhatsAppFloat />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-5 text-white">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/" className="text-white-50">Home</a></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Marriage</li>
                </ol>
              </nav>
              <h1 className="display-4 fw-bold mb-3">Marriage Laws & Registration in Nepal</h1>
              <p className="lead mb-4">
                Complete legal guidance for marriage registration, documentation, and compliance with Nepalese marriage laws.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-white text-primary fs-6 px-3 py-2">
                  <i className="bi bi-clock-history me-2"></i>Process: 7-14 Days
                </span>
                <span className="badge bg-white text-primary fs-6 px-3 py-2">
                  <i className="bi bi-shield-check me-2"></i>Legal Compliance
                </span>
                <span className="badge bg-white text-primary fs-6 px-3 py-2">
                  <i className="bi bi-telephone me-2"></i>Expert Assistance
                </span>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="bg-white rounded p-4 shadow">
                <h5 className="text-primary mb-3">Start Your Marriage Registration</h5>
                <p className="text-muted small mb-3">Get professional help with your marriage registration</p>
                <a 
                  href="tel:+9779800000000" 
                  className="btn btn-primary w-100 mb-2"
                >
                  <i className="bi bi-telephone me-2"></i>Call Now
                </a>
                <a 
                  href="https://wa.me/9779800000000?text=I need assistance with marriage registration in Nepal." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary w-100"
                >
                  <i className="bi bi-whatsapp me-2"></i>Chat on WhatsApp
                </a>
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
                <h3 className="fw-bold text-primary mb-1">1000+</h3>
                <p className="text-muted mb-0">Marriages Registered</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <h3 className="fw-bold text-success mb-1">99%</h3>
                <p className="text-muted mb-0">Success Rate</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <h3 className="fw-bold text-info mb-1">7 Days</h3>
                <p className="text-muted mb-0">Average Processing</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <h3 className="fw-bold text-warning mb-1">24/7</h3>
                <p className="text-muted mb-0">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Tab Navigation */}
              <ul className="nav nav-tabs mb-4" id="marriageTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === "overview" ? "active" : ""}`}
                    onClick={() => setActiveTab("overview")}
                  >
                    <i className="bi bi-info-circle me-2"></i>Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === "requirements" ? "active" : ""}`}
                    onClick={() => setActiveTab("requirements")}
                  >
                    <i className="bi bi-list-check me-2"></i>Requirements
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === "process" ? "active" : ""}`}
                    onClick={() => setActiveTab("process")}
                  >
                    <i className="bi bi-diagram-3 me-2"></i>Registration Process
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === "rights" ? "active" : ""}`}
                    onClick={() => setActiveTab("rights")}
                  >
                    <i className="bi bi-shield-check me-2"></i>Legal Rights
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                {/* Overview Tab */}
                <div className={`tab-pane fade ${activeTab === "overview" ? "show active" : ""}`}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="text-primary mb-4">Marriage Registration Overview in Nepal</h3>
                      <p className="text-muted mb-4">
                        Marriage registration in Nepal is governed by the Marriage Registration Act and various legal provisions. 
                        Proper registration provides legal recognition and protects the rights of both spouses under Nepalese law.
                      </p>
                      
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="d-flex align-items-start">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                              <i className="bi bi-person-check-fill text-primary fs-5"></i>
                            </div>
                            <div>
                              <h5>Eligibility Criteria</h5>
                              <p className="text-muted small">
                                Minimum age requirements and legal capacity for marriage under Nepalese law.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-start">
                            <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                              <i className="bi bi-file-earmark-text-fill text-primary fs-5"></i>
                            </div>
                            <div>
                              <h5>Legal Documentation</h5>
                              <p className="text-muted small">
                                Required documents and certificates for successful marriage registration.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h5 className="mt-4 mb-3">Key Legal Provisions</h5>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Minimum age: 20 years without guardian consent</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Voluntary consent of both parties required</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Prohibition of bigamy and polygamy</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Registration within specific timeframe</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements Tab */}
                <div className={`tab-pane fade ${activeTab === "requirements" ? "show active" : ""}`}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="text-primary mb-4">Marriage Registration Requirements</h3>
                      
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-3">
                                <div className="bg-primary bg-opacity-20 p-2 rounded me-3">
                                  <i className="bi bi-person-badge-fill text-primary fs-4"></i>
                                </div>
                                <h5 className="mb-0">Personal Documents</h5>
                              </div>
                              <ul className="text-muted">
                                <li>Citizenship certificates of both parties</li>
                                <li>Birth certificates or age proof</li>
                                <li>Recent passport-sized photographs</li>
                                <li>Marriage application form</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-3">
                                <div className="bg-success bg-opacity-20 p-2 rounded me-3">
                                  <i className="bi bi-people-fill text-success fs-4"></i>
                                </div>
                                <h5 className="mb-0">Witness Requirements</h5>
                              </div>
                              <ul className="text-muted">
                                <li>Two adult witnesses with citizenship</li>
                                <li>Witnesses must know both parties</li>
                                <li>Their presence during application</li>
                                <li>Signed witness statements</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="alert alert-info mt-4">
                        <i className="bi bi-info-circle me-2"></i>
                        <strong>Note:</strong> Foreign nationals require additional documents including passport copies, 
                        visa details, and marital status affidavits from their embassy.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process Tab */}
                <div className={`tab-pane fade ${activeTab === "process" ? "show active" : ""}`}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="text-primary mb-4">Marriage Registration Process</h3>
                      
                      <div className="process-steps">
                        <div className="step">
                          <div className="step-number bg-primary">1</div>
                          <div className="step-content">
                            <h5>Document Preparation</h5>
                            <p className="text-muted">
                              Gather all required documents and ensure they are properly attested and translated if necessary.
                            </p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number bg-primary">2</div>
                          <div className="step-content">
                            <h5>Application Submission</h5>
                            <p className="text-muted">
                              Submit the marriage registration application at the concerned District Court or Ward Office.
                            </p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number bg-primary">3</div>
                          <div className="step-content">
                            <h5>Verification Process</h5>
                            <p className="text-muted">
                              Authorities verify documents and may conduct interviews with both parties and witnesses.
                            </p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number bg-primary">4</div>
                          <div className="step-content">
                            <h5>Certificate Issuance</h5>
                            <p className="text-muted">
                              Receive the official marriage certificate upon successful verification and approval.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row mt-4 g-4">
                        <div className="col-md-6">
                          <div className="card border-0 bg-warning bg-opacity-10">
                            <div className="card-body">
                              <h6><i className="bi bi-exclamation-triangle me-2"></i>Important Notes</h6>
                              <ul className="small text-muted mb-0">
                                <li>Process may vary slightly by district</li>
                                <li>Additional requirements for foreign nationals</li>
                                <li>Keep copies of all submitted documents</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card border-0 bg-info bg-opacity-10">
                            <div className="card-body">
                              <h6><i className="bi bi-lightbulb me-2"></i>Pro Tips</h6>
                              <ul className="small text-muted mb-0">
                                <li>Start process well before planned date</li>
                                <li>Verify document requirements in advance</li>
                                <li>Consider professional assistance for complex cases</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rights Tab */}
                <div className={`tab-pane fade ${activeTab === "rights" ? "show active" : ""}`}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="text-primary mb-4">Legal Rights & Benefits</h3>
                      
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="d-flex align-items-start mb-4">
                            <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-house-fill text-primary"></i>
                            </div>
                            <div>
                              <h5>Property Rights</h5>
                              <p className="text-muted small">
                                Equal rights to marital property, inheritance rights, and protection of assets acquired during marriage.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-start mb-4">
                            <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-heart-fill text-success"></i>
                            </div>
                            <div>
                              <h5>Spousal Rights</h5>
                              <p className="text-muted small">
                                Rights to maintenance, support, and equal treatment under family law provisions.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-start mb-4">
                            <div className="bg-info bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-people-fill text-info"></i>
                            </div>
                            <div>
                              <h5>Parental Rights</h5>
                              <p className="text-muted small">
                                Equal parental rights and responsibilities towards children born in the marriage.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-start mb-4">
                            <div className="bg-warning bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-passport-fill text-warning"></i>
                            </div>
                            <div>
                              <h5>Legal Recognition</h5>
                              <p className="text-muted small">
                                Official recognition for visa applications, joint property ownership, and legal proceedings.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{top: '20px'}}>
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-primary text-white">
                    <h5 className="mb-0"><i className="bi bi-send me-2"></i>Apply for Marriage Registration</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-3">Start your marriage registration process with our experts</p>
                    
                    <div className="d-grid gap-2">
                      <a
                        href="mailto:legalhelpnepal@gmail.com?subject=Marriage Registration Application&body=Please provide your details: Full Names, Contact Numbers, Planned Marriage Date"
                        className="btn btn-primary"
                      >
                        <i className="bi bi-envelope me-2"></i>Apply via Email
                      </a>
                      <a
                        href="https://wa.me/9779800000000?text=I want to apply for marriage registration in Nepal. Please guide me through the process."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                      >
                        <i className="bi bi-whatsapp me-2"></i>Apply via WhatsApp
                      </a>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-download me-2"></i>Download Checklist
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-header bg-light">
                    <h5 className="mb-0"><i className="bi bi-clock-history me-2"></i>Processing Timeline</h5>
                  </div>
                  <div className="card-body">
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-marker bg-primary"></div>
                        <div className="timeline-content">
                          <h6>Document Preparation</h6>
                          <small className="text-muted">2-3 days</small>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker bg-primary"></div>
                        <div className="timeline-content">
                          <h6>Application Submission</h6>
                          <small className="text-muted">1 day</small>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker bg-primary"></div>
                        <div className="timeline-content">
                          <h6>Verification Process</h6>
                          <small className="text-muted">3-7 days</small>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker bg-primary"></div>
                        <div className="timeline-content">
                          <h6>Certificate Issuance</h6>
                          <small className="text-muted">1-2 days</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-light">
                    <h5 className="mb-0"><i className="bi bi-telephone me-2"></i>Quick Contact</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-grid gap-2">
                      <a href="tel:+9779800000000" className="btn btn-outline-primary">
                        <i className="bi bi-phone me-2"></i>+977 9800000000
                      </a>
                      <a href="mailto:legalhelpnepal@gmail.com" className="btn btn-outline-primary">
                        <i className="bi bi-envelope me-2"></i>legalhelpnepal@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-center text-primary mb-5">Frequently Asked Questions</h2>
              
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      What is the minimum age for marriage in Nepal?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The minimum age for marriage in Nepal is 20 years for both parties without guardian consent. 
                      With parental consent, the age requirement may be lower in specific circumstances.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      Can foreigners get married in Nepal?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, foreigners can get married in Nepal, but they need to provide additional documents including 
                      passport copies, marital status certificates from their embassy, and meet specific requirements.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      How long is the marriage certificate valid?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The marriage certificate issued in Nepal is valid indefinitely and is recognized nationally and internationally 
                      for all legal purposes including visa applications and property transactions.
                    </div>
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