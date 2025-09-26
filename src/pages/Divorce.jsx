import SEO from "../components/SEO";
import { useState } from "react";
import WhatsAppFloat from "../components/WhatsAppFloat";
export default function Divorce() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container-fluid px-0">
      <SEO 
        title="Divorce Laws in Nepal | Legal Process & Rights" 
        description="Comprehensive guide to divorce laws, procedures, rights, and legal requirements in Nepal. Professional assistance for divorce cases." 
      />
      <WhatsAppFloat />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-danger to-danger-dark py-5 text-white">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/" className="text-white-50">Home</a></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Divorce</li>
                </ol>
              </nav>
              <h1 className="display-4 fw-bold mb-3">Divorce Laws & Process in Nepal</h1>
              <p className="lead mb-4">
                Comprehensive legal guidance for divorce proceedings, rights protection, and settlement agreements in accordance with Nepalese law.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-white text-danger fs-6 px-3 py-2">
                  <i className="bi bi-clock-history me-2"></i>Process: 3-6 Months
                </span>
                <span className="badge bg-white text-danger fs-6 px-3 py-2">
                  <i className="bi bi-shield-check me-2"></i>Legal Support
                </span>
                <span className="badge bg-white text-danger fs-6 px-3 py-2">
                  <i className="bi bi-telephone me-2"></i>Expert Consultation
                </span>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="bg-white rounded p-4 shadow">
                <h5 className="text-danger mb-3">Need Immediate Help?</h5>
                <p className="text-muted small mb-3">Speak with our legal experts today</p>
                <a 
                  href="tel:+9779800000000" 
                  className="btn btn-danger w-100 mb-2"
                >
                  <i className="bi bi-telephone me-2"></i>Call Now
                </a>
                <a 
                  href="https://wa.me/9779800000000?text=I need legal assistance with divorce in Nepal." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger w-100"
                >
                  <i className="bi bi-whatsapp me-2"></i>Chat on WhatsApp
                </a>
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
              <ul className="nav nav-tabs mb-4" id="divorceTabs" role="tablist">
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
                    className={`nav-link ${activeTab === "process" ? "active" : ""}`}
                    onClick={() => setActiveTab("process")}
                  >
                    <i className="bi bi-diagram-3 me-2"></i>Legal Process
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === "rights" ? "active" : ""}`}
                    onClick={() => setActiveTab("rights")}
                  >
                    <i className="bi bi-shield-check me-2"></i>Rights & Entitlements
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeTab === "documents" ? "active" : ""}`}
                    onClick={() => setActiveTab("documents")}
                  >
                    <i className="bi bi-folder me-2"></i>Required Documents
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                {/* Overview Tab */}
                <div className={`tab-pane fade ${activeTab === "overview" ? "show active" : ""}`}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="text-danger mb-4">Divorce Overview in Nepal</h3>
                      <p className="text-muted mb-4">
                        Divorce in Nepal is governed by the Muluki Ain (Country Code) and various other legal provisions. 
                        The process can be initiated through mutual consent or based on specific grounds as defined by law.
                      </p>
                      
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="d-flex align-items-start">
                            <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                              <i className="bi bi-people-fill text-danger fs-5"></i>
                            </div>
                            <div>
                              <h5>Mutual Consent Divorce</h5>
                              <p className="text-muted small">
                                When both spouses agree to end the marriage amicably without assigning fault.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-start">
                            <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                              <i className="bi bi-person-x-fill text-danger fs-5"></i>
                            </div>
                            <div>
                              <h5>Contested Divorce</h5>
                              <p className="text-muted small">
                                When one spouse files for divorce based on specific legal grounds without mutual agreement.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h5 className="mt-4 mb-3">Legal Grounds for Divorce</h5>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Cruelty or domestic violence</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Adultery or infidelity</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Desertion for more than 3 years</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Conversion to another religion</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Mental disorder or incurable disease</span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span>Presumption of death</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process Tab */}
                <div className={`tab-pane fade ${activeTab === "process" ? "show active" : ""}`}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="text-danger mb-4">Divorce Process in Nepal</h3>
                      
                      <div className="process-steps">
                        <div className="step">
                          <div className="step-number">1</div>
                          <div className="step-content">
                            <h5>Initial Consultation</h5>
                            <p className="text-muted">
                              Meet with a legal expert to discuss your situation and understand your options.
                            </p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number">2</div>
                          <div className="step-content">
                            <h5>Document Preparation</h5>
                            <p className="text-muted">
                              Gather and prepare all required documents with legal assistance.
                            </p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number">3</div>
                          <div className="step-content">
                            <h5>Filing Petition</h5>
                            <p className="text-muted">
                              Submit the divorce petition to the appropriate District Court.
                            </p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number">4</div>
                          <div className="step-content">
                            <h5>Court Proceedings</h5>
                            <p className="text-muted">
                              Attend court hearings and mediation sessions as required.
                            </p>
                          </div>
                        </div>
                        <div className="step">
                          <div className="step-number">5</div>
                          <div className="step-content">
                            <h5>Final Decree</h5>
                            <p className="text-muted">
                              Receive the divorce decree from the court upon successful completion.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="alert alert-info mt-4">
                        <i className="bi bi-info-circle me-2"></i>
                        <strong>Note:</strong> The duration of the divorce process varies depending on the complexity of the case and whether it is contested or uncontested.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rights Tab */}
                <div className={`tab-pane fade ${activeTab === "rights" ? "show active" : ""}`}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="text-danger mb-4">Rights & Entitlements</h3>
                      
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-3">
                                <div className="bg-warning bg-opacity-20 p-2 rounded me-3">
                                  <i className="bi bi-cash-coin text-warning fs-4"></i>
                                </div>
                                <h5 className="mb-0">Alimony & Maintenance</h5>
                              </div>
                              <p className="text-muted">
                                Financial support provided by one spouse to the other after divorce, based on factors like income, duration of marriage, and standard of living.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-3">
                                <div className="bg-info bg-opacity-20 p-2 rounded me-3">
                                  <i className="bi bi-people-fill text-info fs-4"></i>
                                </div>
                                <h5 className="mb-0">Child Custody</h5>
                              </div>
                              <p className="text-muted">
                                Determination of parental rights and responsibilities regarding children, prioritizing the best interests of the child.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-3">
                                <div className="bg-success bg-opacity-20 p-2 rounded me-3">
                                  <i className="bi bi-house-fill text-success fs-4"></i>
                                </div>
                                <h5 className="mb-0">Property Division</h5>
                              </div>
                              <p className="text-muted">
                                Equitable distribution of marital assets and properties acquired during the marriage.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-3">
                                <div className="bg-primary bg-opacity-20 p-2 rounded me-3">
                                  <i className="bi bi-file-earmark-text-fill text-primary fs-4"></i>
                                </div>
                                <h5 className="mb-0">Legal Documentation</h5>
                              </div>
                              <p className="text-muted">
                                Right to proper legal documentation and certification of the divorce decree for future reference.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Tab */}
                <div className={`tab-pane fade ${activeTab === "documents" ? "show active" : ""}`}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="text-danger mb-4">Required Documents</h3>
                      
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="d-flex align-items-start mb-4">
                            <div className="bg-danger bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-file-earmark-check-fill text-danger"></i>
                            </div>
                            <div>
                              <h5>Essential Documents</h5>
                              <ul className="text-muted">
                                <li>Marriage certificate</li>
                                <li>Citizenship certificates of both spouses</li>
                                <li>Divorce petition with grounds</li>
                                <li>Proof of address</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-start mb-4">
                            <div className="bg-danger bg-opacity-10 p-2 rounded me-3">
                              <i className="bi bi-file-earmark-plus-fill text-danger"></i>
                            </div>
                            <div>
                              <h5>Additional Documents (if applicable)</h5>
                              <ul className="text-muted">
                                <li>Child birth certificates</li>
                                <li>Property documents</li>
                                <li>Income verification</li>
                                <li>Medical certificates</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="alert alert-warning">
                        <i className="bi bi-exclamation-triangle me-2"></i>
                        <strong>Important:</strong> All documents must be properly attested and translated into Nepali if originally in another language.
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
                  <div className="card-header bg-danger text-white">
                    <h5 className="mb-0"><i className="bi bi-send me-2"></i>Apply for Divorce</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-3">Start your divorce process with our legal experts</p>
                    
                    <div className="d-grid gap-2">
                      <a
                        href="mailto:legalhelpnepal@gmail.com?subject=Divorce Application&body=Please provide your details: Full Name, Contact Number, Brief Description of Situation"
                        className="btn btn-danger"
                      >
                        <i className="bi bi-envelope me-2"></i>Apply via Email
                      </a>
                      <a
                        href="https://wa.me/9779800000000?text=I want to apply for divorce in Nepal. Please guide me through the process."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                      >
                        <i className="bi bi-whatsapp me-2"></i>Apply via WhatsApp
                      </a>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-download me-2"></i>Download Checklist
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-light">
                    <h5 className="mb-0"><i className="bi bi-clock-history me-2"></i>Process Timeline</h5>
                  </div>
                  <div className="card-body">
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-marker bg-danger"></div>
                        <div className="timeline-content">
                          <h6>Initial Consultation</h6>
                          <small className="text-muted">1-2 days</small>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker bg-danger"></div>
                        <div className="timeline-content">
                          <h6>Document Preparation</h6>
                          <small className="text-muted">3-7 days</small>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker bg-danger"></div>
                        <div className="timeline-content">
                          <h6>Court Filing</h6>
                          <small className="text-muted">1-2 weeks</small>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker bg-danger"></div>
                        <div className="timeline-content">
                          <h6>Court Proceedings</h6>
                          <small className="text-muted">1-4 months</small>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker bg-danger"></div>
                        <div className="timeline-content">
                          <h6>Final Decree</h6>
                          <small className="text-muted">2-4 weeks</small>
                        </div>
                      </div>
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
              <h2 className="text-center text-danger mb-5">Frequently Asked Questions</h2>
              
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      How long does a divorce take in Nepal?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The duration varies based on the type of divorce. Mutual consent divorces typically take 2-3 months, while contested divorces can take 6 months to over a year depending on case complexity.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      Can I get a divorce without my spouse's consent?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, you can file for a contested divorce based on specific legal grounds such as cruelty, adultery, desertion, or other valid reasons as defined by Nepalese law.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      What are the costs involved in a divorce?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Costs vary depending on case complexity, legal representation, court fees, and documentation. Contact us for a detailed cost breakdown based on your specific situation.
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