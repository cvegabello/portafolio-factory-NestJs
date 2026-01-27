"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: any) {
  const { name, email, subject, message } = formData;

  // 1. Configurar el transporte (El camión de correos)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // 2. Verificar conexión
    await transporter.verify();

    // 3. Enviar el correo a SU propia bandeja
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // El remitente "falso" para que Gmail no bloquee
      replyTo: email, // Para que cuando le de "Responder", le responda al usuario
      to: process.env.GMAIL_TO, // Se lo envía a usted mismo
      subject: `[Portafolio] Nuevo mensaje de ${name}: ${subject}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>🚀 Nuevo Contacto del Portafolio</h2>
          <p><strong>De:</strong> ${name} (${email})</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr />
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error enviando correo:", error);
    return { success: false, error: "Error al enviar el correo" };
  }
}
