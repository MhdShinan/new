const nodemailer = require('nodemailer');
const FormSubmission = require('../models/formModel');

exports.handleFormSubmission = async (req, res) => {
  const { name, contactNo, email, message, service, platform, quantity } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message regarding ${service}`,
    text: `Name: ${name}\nContact No: ${contactNo}\nEmail: ${email}\nMessage: ${message}\nService: ${service}\nPlatform: ${platform}\nQuantity: ${quantity}`,
  };

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting R-Tech Solutions!',
    html: `<p>Hi <strong>${name}</strong>,</p>
           <p>Thank you for reaching out to us! We have received your message:</p>
           <blockquote>${message}</blockquote>
           <p><strong>Service:</strong> ${service}</p>
           <p><strong>Platform:</strong> ${platform}</p>
           <p><strong>Quantity:</strong> ${quantity}</p>
           <p>We will get back to you shortly.</p>
           <p>Best Regards,<br>R-Tech Solutions Team</p>`,
  };

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    const formSubmission = new FormSubmission({
      name,
      contactNo,
      email,
      message,
      service,
      platform,
      quantity,
    });

    await formSubmission.save();

    res.status(200).json({ success: true, message: 'Emails sent and details saved successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Error processing request', error });
  }
};
