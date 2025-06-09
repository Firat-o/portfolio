
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Alle Felder sind erforderlich.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Kontaktformular <kontakt@firato.tech>', // WICHTIG: Ersetze das mit deiner verifizierten Domain!
      to: ['f.olcay@outlook.de'], 
      subject: `Neue Nachricht von ${name}`,
      reply_to: email,
      html: `
        <h1>Neue Kontaktanfrage von deinem Portfolio</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <hr>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Fehler beim Senden der E-Mail.' });
  }
}