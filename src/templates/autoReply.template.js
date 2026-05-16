export const autoReplyTemplate = (name) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f4f4f5;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    .header {
      background-color: #18181b;
      padding: 30px 40px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.025em;
    }
    .content {
      padding: 40px;
      color: #3f3f46;
      line-height: 1.6;
    }
    .content h2 {
      color: #18181b;
      font-size: 20px;
      margin-top: 0;
      font-weight: 600;
    }
    .footer {
      background-color: #fafafa;
      padding: 20px 40px;
      text-align: center;
      color: #a1a1aa;
      font-size: 14px;
      border-top: 1px solid #e4e4e7;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #18181b;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 500;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Message Received</h1>
    </div>
    <div class="content">
      <h2>Hello ${name},</h2>
      <p>Thank you for reaching out! I have received your message and will review it as soon as possible.</p>
      <p>I typically respond within 24-48 hours. If your request is urgent, please feel free to follow up by replying to this email.</p>
      <p>Best regards,</p>
    </div>
    <div class="footer">
      <p>This is an automated response. I will be in touch shortly.</p>
    </div>
  </div>
</body>
</html>
  `;
};
