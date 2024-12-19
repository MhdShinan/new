const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { firstName, contactNumber, email, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${email}`,
    text: `You have a new message from your contact form:
          Name: ${firstName}
          Contact Number: ${contactNumber}
          Email: ${email}
          Message: ${message}`,
    replyTo: email,
  };

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting R-Tech Solutions!',
    html: `<p>Hi <strong>${firstName}</strong>,</p>
           <p>Thank you for reaching out to us! We have received your message:</p>
           <blockquote>${message}</blockquote>
           <p>We will get back to you shortly.</p>
           <p>Best Regards,<br>R-Tech Solutions Team</p>`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send emails.' });
  }
};
