export const contactNotificationTemplate = ({
  name,
  email,
  message,
}) => {
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
      border: 1px solid #e4e4e7;
    }
    .header {
      background-color: #2563eb;
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
    .detail-group {
      margin-bottom: 24px;
    }
    .detail-label {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #71717a;
      margin-bottom: 8px;
      font-weight: 600;
    }
    .detail-value {
      font-size: 16px;
      color: #18181b;
      background-color: #f4f4f5;
      padding: 14px 16px;
      border-radius: 8px;
      font-weight: 500;
    }
    .message-box {
      font-size: 15px;
      color: #18181b;
      background-color: #eff6ff;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #2563eb;
      white-space: pre-wrap;
      line-height: 1.7;
    }
    .footer {
      background-color: #fafafa;
      padding: 20px 40px;
      text-align: center;
      color: #a1a1aa;
      font-size: 14px;
      border-top: 1px solid #e4e4e7;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Request</h1>
    </div>
    <div class="content">
      <div class="detail-group">
        <div class="detail-label">Sender Name</div>
        <div class="detail-value">${name}</div>
      </div>
      <div class="detail-group">
        <div class="detail-label">Sender Email</div>
        <div class="detail-value">
          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
        </div>
      </div>
      <div class="detail-group">
        <div class="detail-label">Message Details</div>
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent securely from your Portfolio Website</p>
    </div>
  </div>
</body>
</html>
  `;
};
