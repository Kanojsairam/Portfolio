# 🚀 EmailJS Direct Email Setup

## Overview
Your contact form now sends emails **directly to sairamsss326@gmail.com** without opening any external websites or email clients. It uses EmailJS for browser-based email delivery.

## Quick Setup (3 minutes)

### Step 1: Create Free EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up with your email: `sairamsss326@gmail.com`
3. It's completely free for up to 200 emails/month

### Step 2: Create Email Service
1. In EmailJS dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail** 
3. Connect your Gmail account: `sairamsss326@gmail.com`
4. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. **Email Templates** → **Create New Template**
2. Use this template:
```
Subject: New Contact from Portfolio - {{subject}}

Hi Kanojsairam,

You received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply directly to: {{reply_to}}
```
3. Copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `user_abcdef123`)

### Step 5: Update Contact Form
In `Contact.tsx`, replace these placeholders:
```typescript
// Find these lines in handleSubmit function:
'service_portfolio' → your Service ID
'template_contact'  → your Template ID  
'user_publickey123' → your Public Key
```

## ✅ How It Works
1. User fills contact form → Clicks "Send Message"
2. EmailJS sends email directly to `sairamsss326@gmail.com`
3. **No external websites open**
4. **No email clients open**
5. **Works entirely in the browser**
6. You receive properly formatted emails instantly

## 📧 Email Format You'll Receive
```
TO: sairamsss326@gmail.com
FROM: EmailJS Service <noreply@emailjs.com>
SUBJECT: New Contact from Portfolio - [Their Subject]

Hi Kanojsairam,

You received a new message from your portfolio website:

Name: John Smith
Email: john@example.com
Subject: Project Inquiry

Message:
Hi, I'm interested in collaborating on a project...

---
Reply directly to: john@example.com
```

## 🔄 Alternative: Use Formspree
If you prefer, I can switch to Formspree instead:
- Also sends directly to your Gmail
- Different setup process
- Both work without opening external apps

**Next Step:** Set up EmailJS (3 minutes) to activate direct email delivery!
