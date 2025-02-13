const nodemailer = require("nodemailer");

const emailManager = async (to, subject, text, html) => {
  //dynamics

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e525da9316d5db",
      pass: "b9f6739e48b114",
    },
  });

  await transport.sendMail({
    from: '"DevCraft Support" <no-reply@devcraft.tech>', // Adjust sender details
    to,
    subject,
    text,
    html,
  });
};

module.exports = emailManager;
