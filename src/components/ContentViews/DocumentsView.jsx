import React from 'react';
import './DocumentsView.css';
import { FileText, DownloadCloud, Eye } from 'lucide-react'; // Example icons

const DocumentsView = () => {
  // Placeholder data for documents
  const documents = [
    {
      id: 'doc1',
      name: 'My Resume (PDF)',
      type: 'PDF Document',
      size: '1.2 MB',
      lastModified: '2024-05-10',
      icon: <FileText size={24} strokeWidth={1.5} />,
      downloadLink: '#',
      previewLink: '#',
    },
    {
      id: 'doc2',
      name: 'Cover Letter Template (DOCX)',
      type: 'Word Document',
      size: '88 KB',
      lastModified: '2024-05-08',
      icon: <FileText size={24} strokeWidth={1.5} />,
      downloadLink: '#',
    },
    {
      id: 'doc3',
      name: 'Case Study - Project Alpha (PDF)',
      type: 'PDF Document',
      size: '5.7 MB',
      lastModified: '2024-04-22',
      icon: <FileText size={24} strokeWidth={1.5} />,
      downloadLink: '#',
      previewLink: '#',
    },
    {
      id: 'doc4',
      name: 'Freelance Contract (PDF)',
      type: 'PDF Document',
      size: '312 KB',
      lastModified: '2024-03-15',
      icon: <FileText size={24} strokeWidth={1.5} />,
      downloadLink: '#',
    },
    // Add more documents as needed
  ];

  return (
    <div className="content-view-modern documents-view-modern">
      <div className="content-view-header">
        <h2>Documents</h2>
        {/* Add sorting or filtering options here if needed */}
      </div>
      <div className="documents-list-modern">
        <div className="documents-list-header-modern">
          <div className="doc-header-name">Name</div>
          <div className="doc-header-type">Type</div>
          <div className="doc-header-size">Size</div>
          <div className="doc-header-modified">Last Modified</div>
          <div className="doc-header-actions">Actions</div>
        </div>
        {documents.map(doc => (
          <div key={doc.id} className="document-item-modern">
            <div className="document-icon-name">
              <span className="document-item-icon">{doc.icon}</span>
              <span className="document-item-name">{doc.name}</span>
            </div>
            <div className="document-item-type">{doc.type}</div>
            <div className="document-item-size">{doc.size}</div>
            <div className="document-item-modified">{doc.lastModified}</div>
            <div className="document-item-actions">
              {doc.previewLink && doc.previewLink !== '#' && (
                <a href={doc.previewLink} target="_blank" rel="noopener noreferrer" className="action-button preview-button" title="Preview">
                  <Eye size={16} />
                </a>
              )}
              {doc.downloadLink && doc.downloadLink !== '#' && (
                <a href={doc.downloadLink} download className="action-button download-button" title="Download">
                  <DownloadCloud size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsView;

