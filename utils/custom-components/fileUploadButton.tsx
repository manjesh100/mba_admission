import React, { useRef } from 'react';
import Image from 'next/image';
import { constImage } from '../constImage';

interface FileUploadButtonProps {
  onFileSelect: (file: File) => void;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    // Accessing the input element's 'files' property
    const selectedFile = fileInputRef.current?.files?.[0];

    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="fileUploadBtn">
      <label htmlFor="fileUpload">Upload Intro Video</label>
      <input
        type="file"
        id="fileUpload"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <button onClick={() => fileInputRef.current?.click()}><Image src={constImage.file_upload_icon} width={20} height={20} alt="" /></button>
    </div>
  );
};

export default FileUploadButton;
