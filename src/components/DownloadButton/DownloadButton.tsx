import React from 'react';
import { Button } from 'antd'
import { DownloadButtonProps } from './DownloadButton.types';

const DownloadButton: React.FC<DownloadButtonProps> = ({text, className}) => {
  const handleDownload = () => {
    // Path to the file in the public directory
    const fileUrl = '../../../public/docs/McMaster_Resume_2024.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    
    // Set the download attribute with a desired file name
    link.download = 'McMaster_Resume_2024.pdf';
    
    // Append the anchor to the body
    document.body.appendChild(link);
    
    // Programmatically click the anchor
    link.click();
    
    // Remove the anchor from the document
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} className={className}>
      {text}
    </Button>
  );
};

export default DownloadButton;
