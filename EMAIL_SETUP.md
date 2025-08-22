# 📧 Contact Form Email Setup

## Quick Setup (2 minutes to activate email delivery)

Your contact form is configured to send emails to **sairamsss326@gmail.com** but needs a free Web3Forms account to activate.

### Step 1: Get Free Web3Forms Access Key
1. Go to [web3forms.com](https://web3forms.com)
2. Click "Get Started Free"
3. Enter your email: `sairamsss326@gmail.com`
4. Copy your access key (looks like: `abc123-def456-ghi789`)

### Step 2: Update Contact Form
1. Open `src/Contact/Contact.tsx`
2. Find line ~15: `access_key: 'e8f9a5b3-7c2d-4a1b-9e6f-8d3c5b7a9e1f'`
3. Replace the placeholder with your real access key
4. Save the file

### Step 3: Test
1. Fill out your contact form
2. Click "Send Message"
3. Check your Gmail: sairamsss326@gmail.com
4. You should receive the email!

## 🔧 Alternative: Use Formspree
If you prefer Formspree:
1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Set recipient: `sairamsss326@gmail.com`
4. Get form endpoint ID
5. Replace Web3Forms code with Formspree endpoint

## 📩 Email Format You'll Receive
```
TO: sairamsss326@gmail.com
SUBJECT: New Contact Form Submission

Name: John Smith
Email: john@example.com
Subject: Project Inquiry
Message: Hi, I'm interested in collaborating...
```

## ✅ Current Status
- ✅ Form UI complete
- ✅ Email address updated to sairamsss326@gmail.com
- ⏳ Needs Web3Forms activation (2 minutes)
- ✅ Error handling implemented
- ✅ Success messages configured

**Next Step:** Get your Web3Forms access key to activate email delivery!
