const nodemailer = require('nodemailer');

// Function to send email to the admin
const sendAdminEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // Use false since port 587 is typically used for non-secure connections
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // The email address you want to send the form data to
    subject: 'New Get Started Form Submission',
    text: `
      Service: ${data.service}
      Platform: ${data.platform}
      Quantity: ${data.quantity}
      Name: ${data.name}
      Contact: ${data.contact}
      Email: ${data.email}
      Message: ${data.message}
    `,
  };

  return transporter.sendMail(mailOptions);
};

// Function to send confirmation email to the user
const sendConfirmationEmail = async (userEmail, userName) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // Use false since port 587 is typically used for non-secure connections
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail, // The user's email address
    subject: 'Thank you for contacting R-tech Solutions',
    text: `Dear ${userName},\n\nThank you for contacting R-tech Solutions. We will get back to you soon with your service details.\n\nBest regards,\nR-tech Solutions Team`,
  };

  return transporter.sendMail(mailOptions);
};

// Controller for handling form submissions
const getStartedController = async (req, res) => {
  const { service, platform, quantity, name, contact, email, message } = req.body;

  // Validation check
  if (!service || !platform || !name || !contact || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Send email to admin
    await sendAdminEmail({
      service,
      platform,
      quantity,
      name,
      contact,
      email,
      message,
    });

    // Send confirmation email to the user
    await sendConfirmationEmail(email, name);

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email, please try again.' });
  }
};

module.exports = getStartedController;
