import { ActionFunction } from 'remix'

// TODO: needs to be finished
export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const name = body.get('name')
  const email = body.get('email')
  const message = body.get('message')
  console.log(name, email, message)
  return [{ value: null }]
  //   try {
  //     sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)
  //     const msg = {
  //       to: 'jadonscholes@gmail.com',
  //       from: 'jadonscholes@gmail.com',
  //       subject: 'Portfolio Website Contact Form',
  //       html: `<p>From: ${name}<br />Email: ${email}<br />Message:<br />${message}</p>`,
  //     }
  //     const response = await sgMail.send(msg)
  //     console.log(response)
  //     return [{ response }]
  //   } catch (error) {
  //     console.error(error)
  //   }
}
