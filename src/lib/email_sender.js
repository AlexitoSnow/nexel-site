import EmailTemplate from '@/components/email_template';
import { Resend } from 'resend';
import { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend('re_BEU6Djkr_21ESGgE3EGzAoFxmmeSWMPcX');

export default async function sendForm (req, res, to, subject, message) {
  const { data, error } = await resend.emails.send({
    from: 'Nexel<ganieves@espol.edu.ec>',
    to: to,
    subject: subject,
    react: EmailTemplate({ message: message }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};