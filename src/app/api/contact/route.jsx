import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { generateInquiryEmail } from "./getHtml"

export async function POST(request) {
  const formData = await request.formData()

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const name = formData.get('name')
  const email = formData.get('email')
  const company = formData.get('company')
  const phone = formData.get('phone')
  const projectType = formData.get('projectType')
  const budget = formData.get('budget')
  const timeline = formData.get('timeline')
  const subject = formData.get('subject')
  const message = formData.get('message')

  const htmlBody = generateInquiryEmail({ name, email, company, phone, projectType, budget, timeline, subject, message,})
  console.log(htmlBody)
  try {
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Inquiry from ${name}: ${subject}`,
      html: htmlBody,
    })

    return NextResponse.redirect(new URL('/thank-you', request.url), { status: 302 })
  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
