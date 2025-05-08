
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['https://bkavinkumarportfolio.onrender.com'], // In production, you should specify your frontend domain
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Check configuration
const EMAIL_USER = process.env.EMAIL_USER || 'kavinkumar0506@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'afag ftby agha yhhh';

if (EMAIL_USER === 'kavinkumar0506@gmail.com' || EMAIL_PASS === 'afag ftby agha yhhh') {
  console.warn('⚠️ WARNING: Default email credentials are being used. Please set EMAIL_USER and EMAIL_PASS environment variables.');
}

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can change this to another service
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

// Test route to verify server is running
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    });
  }
  
  try {
    console.log('Attempting to send email from:', email, 'to: kavinkumar0506@gmail.com');
    
    // Email options
    const mailOptions = {
      from: email,
      to: 'kavinkumar0506@gmail.com', // Your receiving email
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email', 
      error: error.message,
      details: 'Please check your email configuration and try again.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the server: http://localhost:${PORT}/api/health`);
});
