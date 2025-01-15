import React from 'react';

const DonateLocation = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <iframe
                title="Donation Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509683!2d144.96305791531667!3d-37.81421797975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1691563209255!5m2!1sen!2sus"
                width="350"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default DonateLocation;
