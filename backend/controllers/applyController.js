const nodemailer = require('nodemailer');
const formidable = require('formidable'); // This helps handle form data including file uploads

// Function to send the application email
const sendApplicationEmail = (req, res) => {
  // Parse the form data
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).send('Error processing application');
    }

    // Get the form fields
    const { jobTitle, name, email, address, phone } = fields;
    const resume = files.resume; // Access the uploaded file from `files`

    // Check if file is uploaded
    if (!resume) {
      return res.status(400).send('Resume is required');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // Use false since port 587 is typically used for non-secure connections
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    const mailOptionsToAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Career Application: ${jobTitle}`,
      text: `
        Name: ${name}
        Email: ${email}
        Address: ${address}
        Phone: ${phone}
        Applied for: ${jobTitle}
      `,
      attachments: [
        {
          filename: resume.originalFilename,  // Filename as the original name of the uploaded file
          content: resume.filepath,            // The file content (temporary path where `formidable` stores the file)
        },
      ],
    };

    // Email to applicant
    const mailOptionsToApplicant = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for applying for ${jobTitle}`,
      text: `
        Dear ${name},

        Thank you for applying for the ${jobTitle} role at our company.

        We appreciate your interest in joining our team. Our team will review your application, and we will get back to you soon.

        Best regards,
        The Hiring Team
      `,
    };

    try {
      // Send email to admin
      await transporter.sendMail(mailOptionsToAdmin);

      // Send confirmation email to applicant
      await transporter.sendMail(mailOptionsToApplicant);

      res.status(200).send('Application submitted successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error submitting application');
    }
  });
};

module.exports = { sendApplicationEmail };
