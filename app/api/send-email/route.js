import { EmailTemplate } from '@/components/Email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['mo7amedtobal@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate(),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
