import React from "react";

const Footer = () => {
    return (
        <footer className="footer" style={{
            backgroundColor: 'rgba(131,61,59,0.69)',
            padding: '30px',
            marginTop: '20px',
            textAlign: 'center',
            borderTop: '1px solid #e9ecef',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        }}>
            <div className="container">
                <h2 style={{marginBottom: '20px', fontSize: '24px', color: '#fff3f3'}}>Contact Information</h2>
                <p style={{margin: '5px 0', fontSize: '16px', color: '#ffe9e9'}}>Address: 10 Veterinary Street,
                    Moscow</p>
                <p style={{margin: '5px 0', fontSize: '16px', color: '#fff3f3'}}>Phone: +8 (800) 555-35-35</p>
                <p style={{margin: '5px 0', fontSize: '16px', color: '#fff3f3'}}>Email: contact@vetcare.ru</p>
            </div>
        </footer>
    );
};

export default Footer;
