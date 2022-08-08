import React from 'react';
import "./Scan.css";


const Scan = () => {
  return (
    <>
    <div class="wrapper">
      <form action="#">
        <input type="file" hidden/>
        <img src="#" alt="qr-code"/>
        <div class="content">
          <i class="fas fa-cloud-upload"></i>
          <p>Upload QR Code to Read</p>
        </div>
      </form>
      <div class="details">
        <textarea spellcheck="false" disabled></textarea>
        <div class="buttons">
          <button class="close">Close</button>
          <button class="copy">Copy Text</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Scan;