
# Email Server for Portfolio

This is a simple Express server that uses Nodemailer to send emails from the contact form.

## Setup

1. Install dependencies:
```
npm install
```

2. Configure email settings:
Open `index.js` and replace:
- `YOUR_EMAIL@gmail.com` with your Gmail address
- `YOUR_APP_PASSWORD` with your Gmail App Password (not your regular password)

> **Important**: For Gmail, you need to use an App Password instead of your regular password. 
> To generate an App Password:
> 1. Enable 2-Step Verification on your Google account
> 2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
> 3. Select "Mail" and "Other (Custom name)"
> 4. Enter "Portfolio Contact Form" and generate the password

3. Start the server:
```
node index.js
```

The server will run on port 5000 by default. You can change this by setting the PORT environment variable.

## API Endpoint

- **POST /api/send-email**: Sends an email with the contact form data
  - Body parameters:
    - name: The sender's name
    - email: The sender's email
    - message: The message content
