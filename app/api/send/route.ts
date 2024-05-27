import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
  companyName: string;
  email: string;
}

export async function POST(request: Request) {
  try {
    const { companyName, email }: RequestBody = await request.json();
    const data = await resend.emails.send({
      from: 'EOR Agency <onboarding@resend.dev>' as string,
      to: ['faizanhasnaat13@gmail.com'] as string[],
      subject: 'New Consultation Request' as string,
      react: EmailTemplate({ companyName, email }) as string,
    });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
