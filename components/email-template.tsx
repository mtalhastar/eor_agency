import * as React from 'react';

interface EmailTemplateProps {
  companyName: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  companyName,
  email,
}) => (
  <div>
    <h1>Consultation Request</h1>
    <p>Company Name: {companyName}</p>
    <p>Email: {email}</p>
  </div>
);
