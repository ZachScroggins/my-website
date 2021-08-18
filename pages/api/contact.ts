const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  const response = { success: false, message: '' };
  let status = 405;

  if (req.method === 'POST') {
    status = 400;
    response.message = 'Please provide your full name, email, and a mesaage.';
    const { name, email, phone, message, honeyPot } = req.body;

    if (name && email && message) {
      status = 500;
      response.message =
        'Oops... Something went wrong. Please try again later.';
      const msg = {
        to: 'scrogginszach@gmail.com', // Change to your recipient
        from: 'contact-form@zachscroggins.com', // Change to your verified sender
        subject: 'New message from contact form',
        text: `
Name: ${name}
    
Email: ${email}
    
Phone: ${phone}

Honey Pot: ${honeyPot}
          
${message}
        `,
      };

      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      await sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
          response.success = true;
          response.message = '';
          status = 200;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  res.status(status).json(response);
};
