import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = '9809437032';
    const message = 'Hello! I need information about your legal services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div 
        className="whatsapp-float"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openWhatsApp}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {/* Main WhatsApp Button */}
        <div 
          className="whatsapp-main-btn"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            animation: 'pulse 2s infinite',
            transition: 'all 0.3s ease'
          }}
        >
          <i 
            className="bi bi-whatsapp" 
            style={{ 
              fontSize: '28px', 
              color: 'white' 
            }}
          ></i>
        </div>

        {/* Hover Tooltip */}
        {isHovered && (
          <div 
            className="whatsapp-tooltip"
            style={{
              position: 'absolute',
              right: '70px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              padding: '12px 16px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              whiteSpace: 'nowrap',
              fontSize: '14px',
              fontWeight: '600',
              color: '#25D366',
              border: '2px solid #25D366'
            }}
          >
            Chat with us on WhatsApp!
            <div 
              style={{
                position: 'absolute',
                right: '-8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '0',
                height: '0',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderLeft: '8px solid #25D366'
              }}
            ></div>
          </div>
        )}

        {/* Ping Animation */}
        <div 
          className="whatsapp-ping"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            animation: 'ping 1.5s ease-in-out infinite both',
            zIndex: -1
          }}
        ></div>
      </div>

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
          }

          @keyframes ping {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          .whatsapp-float:hover .whatsapp-main-btn {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .whatsapp-float {
              bottom: 20px;
              right: 20px;
            }
            
            .whatsapp-main-btn {
              width: 55px;
              height: 55px;
            }
            
            .whatsapp-main-btn i {
              font-size: 24px;
            }
          }

          @media (max-width: 480px) {
            .whatsapp-float {
              bottom: 15px;
              right: 15px;
            }
            
            .whatsapp-main-btn {
              width: 50px;
              height: 50px;
            }
            
            .whatsapp-main-btn i {
              font-size: 22px;
            }
          }
        `}
      </style>
    </>
  );
}