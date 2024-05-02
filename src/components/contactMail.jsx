'use client';
import React from 'react';
import Button from './Button';

class ContactButton extends React.Component {
  handleClick = () => {
    const subject = encodeURIComponent("");
    const body = encodeURIComponent("");
    window.location.href = `mailto:nexel2024@outlook.com?subject=${subject}&body=${body}`;
  };

  render() {
    return (
        <div className='flex flex-col items-center mx-4 md:mx-0 py-2'>
            <h2 className='text-2xl text-center'> En caso de que necesite mas información, porfavor, contáctese con nosotros </h2>
            <Button className="content-center w-auto" text="Contáctenos" onClick={this.handleClick}></Button>
        </div>
    );
  }
}

export default ContactButton;