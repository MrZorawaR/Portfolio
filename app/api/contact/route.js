import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: "nitish.2201301039@geetauniversity.edu.in",
        pass: "vkxkjjzgygcwotgs",
      },
    });

    const mailOptions = {
      from: "nitish.2201301039@geetauniversity.edu.in",
      to: "zorawarjaat315@gmail.com",
      cc: "nitishshyoran420@gmail.com, nitish.2201301039@geetauniversity.edu.in",
      subject: `New Portfolio Inquiry: ${service} by ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
