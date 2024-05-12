import React from 'react';
import Socials from '../../elements/Socials';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <Socials />
        <div className="contactInfo">
            <hr className="light" />
                <div>© Apu Apustaja / SOL 2024</div>
                <div>the only true $APU on Solana chain</div>
                <div>ECutGg12PNhqhkvnH1s1FcuXgCDzKDNhSf5aLtANioR7</div>
        </div>  
    </div>
  )
}

export default Contact;