const nodemailer = require('nodemailer');

// Send Contact Form Data via Email
const sendContactEmail = async (req, res) => {
  const { firstName, phone, email, message } = req.body;

  if (!firstName || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // Use false since port 587 is typically used for non-secure connections
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to R-Tech Solutions
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Us Submission',
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send acknowledgment email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting R-Tech Solutions',
      html: `
        <p>Dear ${firstName},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
        <p>Best regards,</p>
        <p>R-Tech Solutions Team</p>
      `,
    };

    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
};

module.exports = { sendContactEmail };
