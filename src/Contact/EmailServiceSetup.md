# Email Service Setup Guide

## Current Implementation
The contact form currently uses a **mailto** approach which opens the user's default email client. This works universally but requires the user to have an email client configured.

## Option 1: Formspree (Recommended - Easy Setup)
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
5. Replace the handleSubmit function with the Formspree implementation below

### Formspree Implementation:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Option 2: EmailJS (More Customizable)
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up and create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Use the EmailJS implementation (already imported in the component)

### EmailJS Implementation:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'kanojsairam.sa2022ece@sece.ac.in'
      },
      'YOUR_PUBLIC_KEY'
    );

    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error('Error sending message:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Option 3: Backend API (Most Professional)
Create your own backend API endpoint that handles email sending using services like:
- Nodemailer with Gmail/SMTP
- SendGrid
- AWS SES
- Mailgun

## Current Advantages of Mailto Approach:
- ✅ Works immediately without any setup
- ✅ No external dependencies
- ✅ User controls their email client
- ✅ No API limits or costs

## Quick Fix - Test the Current Implementation:
The current implementation should work! When you click "Send via Email Client", it will:
1. Open your default email program
2. Pre-fill the recipient, subject, and message
3. You just need to click send in your email client

Try it now and see if it opens your email client correctly!
