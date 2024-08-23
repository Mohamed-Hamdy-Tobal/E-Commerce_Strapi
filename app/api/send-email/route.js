import { EmailTemplate } from '@/components/Email/email-template';
import { Resend } from 'resend';
import { currentUser } from '@clerk/nextjs/server'

let resend;
if (typeof window === 'undefined') {  // Ensure it's only initialized on the server
  resend = new Resend(process.env.RESEND_API_KEY);
}


export async function POST() {

    const user = await currentUser()

    const userEmail = user.emailAddresses[0].emailAddress

    console.log("SEND EMAIL!")

    console.log(process.env.RESEND_API_KEY)
    

    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [userEmail],
            subject: 'E-Commerce Products',
            react: EmailTemplate({user}),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
