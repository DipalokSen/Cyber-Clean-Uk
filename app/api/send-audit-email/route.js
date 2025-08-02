// app/api/send-audit-email/route.js
export async function POST(request) {
  try {
    // Import nodemailer inside the function to avoid build issues
    const nodemailer = (await import('nodemailer')).default;
    
    const body = await request.json();
    const { Fullname, Email, BusinessName, Website_Url, TypeOfBusiness } = body;

    console.log('Received data:', body);

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Missing email credentials');
      return new Response(
        JSON.stringify({ message: 'Email configuration error' }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"Audit Request" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Audit Request From ${Fullname}`,
      html: `
        <h2>New Audit Request</h2>
        <p><strong>${Fullname}</strong> has requested an audit for their website.</p>
        
        <h3>Details:</h3>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Requested by:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${Fullname}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Website to Audit:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="${Website_Url}">${Website_Url}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Business Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${BusinessName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Business Type:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${TypeOfBusiness}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Contact Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${Email}">${Email}</a></td>
          </tr>
        </table>
        
        <p style="margin-top: 20px; color: #666;">
          <em>This audit was requested on ${new Date().toLocaleString()}</em>
        </p>
      `
      ,
    });

    console.log('Email sent:', info.messageId);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Email error:', error);
    return new Response(
      JSON.stringify({ 
        message: 'Failed to send email', 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}