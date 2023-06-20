import { NextApiRequest, NextApiResponse } from "next";
import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(NextApiRequest, NextApiResponse) {
  console.log("Data", NextApiRequest.body);

  const API_KEY = process.env.MAILGUN_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "";

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const { email, message } = NextApiRequest.body;
  const messageData = {
    from: "Contact Form  pulumbu11@gmail.com",
    to: "pulumbu11@gmail.com",
    subject: "New Contact Form",
    text: `Message from ${email}: ${message}`,
  };

  try {
    const res = await client.messages.create(DOMAIN, messageData);
    console.log(res);
  } catch (err) {
    console.log(err);
  }

  NextApiResponse.status(200).json({ submitted: true });
}
