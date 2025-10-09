const generateOtpEmail = (otp, registrationDate, registrationTime) => {
  const subject = "Your Verification Code";
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Verification Code</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eeeeee; }
            .header h1 { color: #333333; margin: 0; }
            .content { padding: 20px 0; color: #555555; line-height: 1.6; text-align: center; }
            .otp-code { font-size: 36px; font-weight: bold; color: #333333; margin: 20px 0; letter-spacing: 5px; }
            .info { font-size: 14px; color: #888888; }
            .footer { text-align: center; padding-top: 20px; border-top: 1px solid #eeeeee; font-size: 12px; color: #aaaaaa; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Your Verification Code</h1>
            </div>
            <div class="content">
                <p>Please use the following One-Time Password (OTP) to complete your action. This code is valid for 30 minutes.</p>
                <div class="otp-code">${otp}</div>
                <p class="info">For your security, please do not share this code with anyone.</p>
                <p class="info">This request was initiated on ${registrationDate} at ${registrationTime}.</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Optivest Broking Ltd. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
  return { subject, html };
};

const generateWelcomeEmail = (userName, registrationDate, registrationTime) => {
  const subject = `Welcome to Optivest Broking Ltd., ${userName}!`;
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Your Company Name!</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eeeeee; }
            .header h1 { color: #333333; margin: 0; }
            .content { padding: 20px 0; color: #555555; line-height: 1.6; }
            .content h2 { color: #444444; }
            .button-container { text-align: center; margin: 30px 0; }
            .button { background-color: #007bff; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; }
            .info { font-size: 14px; color: #888888; text-align: center; }
            .footer { text-align: center; padding-top: 20px; border-top: 1px solid #eeeeee; font-size: 12px; color: #aaaaaa; }
            .social-links { margin: 20px 0; }
            .social-links a { margin: 0 10px; display: inline-block; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome Aboard!</h1>
            </div>
            <div class="content">
                <h2>Hi ${userName},</h2>
                <p>Thank you for joining us! We are thrilled to have you as part of our community. We're here to help you get started and make the most out of your account.</p>
                <p>Here are a few things you can do to get started:</p>
                <ul>
                    <li>Complete your profile to personalize your experience.</li>
                    <li>Explore your new dashboard.</li>
                    <li>Check out our getting started guide.</li>
                </ul>
                <div class="button-container">
                    <a href="https://your-website.com/dashboard" class="button" style="color: #ffffff;">Go to Your Dashboard</a>
                </div>
                <p>If you have any questions, feel free to reply to this email. We're always happy to help!</p>
            </div>
            <div class="info">
                <p>You registered on ${registrationDate} at ${registrationTime}.</p>
            </div>
            <div class="footer">
                <div class="social-links">
                    <a href="https://github.com/virtual-arin" title="Github"><img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="Github" width="24"></a>
                    <a href="https://www.linkedin.com/in/virtual-arin/" title="LinkedIn"><img src="https://img.icons8.com/material-outlined/24/000000/linkedin.png" alt="LinkedIn" width="24"></a>
                    <a href="https://www.instagram.com/virtual_arin/" title="Instagram"><img src="https://img.icons8.com/material-outlined/24/000000/instagram-new.png" alt="Instagram" width="24"></a>
                </div>
                <p>&copy; ${new Date().getFullYear()} Optivest Broking Ltd. All rights reserved.</p>
                <p>Santa Clara, California, United States</p>
            </div>
        </div>
    </body>
    </html>
  `;
  return { subject, html };
};

module.exports = {
  generateOtpEmail,
  generateWelcomeEmail,
};
