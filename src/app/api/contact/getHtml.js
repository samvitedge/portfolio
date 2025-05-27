export function generateInquiryEmail({
  name,
  email,
  company,
  phone,
  projectType,
  budget,
  timeline,
  subject,
  message,
}) {
  return `
    <div style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #444444;
      padding: 30px;
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border: 1px solid #e0e0e0;
    ">
      <h2 style="
        color: #222222;
        border-bottom: 3px solid #4A90E2;
        padding-bottom: 12px;
        margin-bottom: 30px;
        font-weight: 700;
        font-size: 24px;
      ">
        New Project Inquiry
      </h2>
      <table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">
        ${[
          { label: 'Name', value: name },
          { label: 'Email', value: email },
          { label: 'Company', value: company },
          { label: 'Phone', value: phone },
          { label: 'Project Type', value: projectType },
          { label: 'Budget', value: budget },
          { label: 'Timeline', value: timeline },
          { label: 'Subject', value: subject },
        ].map(
          ({ label, value }) => `
          <tr>
            <td style="
              font-weight: 600;
              width: 30%;
              padding: 8px 12px;
              background: #f7f9fc;
              border-radius: 6px 0 0 6px;
              color: #2c3e50;
            ">
              ${label}:
            </td>
            <td style="
              padding: 8px 12px;
              background: #fdfdfd;
              border-radius: 0 6px 6px 0;
              border: 1px solid #e5e9f0;
              color: #34495e;
            ">
              ${value || '<i style="color:#bbb;">Not provided</i>'}
            </td>
          </tr>
        `).join('')}
        <tr>
          <td style="
            font-weight: 600;
            vertical-align: top;
            padding: 8px 12px;
            background: #f7f9fc;
            border-radius: 6px 0 0 6px;
            color: #2c3e50;
          ">
            Message:
          </td>
          <td style="
            padding: 8px 12px;
            background: #fdfdfd;
            border-radius: 0 6px 6px 0;
            border: 1px solid #e5e9f0;
            color: #34495e;
            white-space: pre-wrap;
            line-height: 1.5;
          ">
            ${message || '<i style="color:#bbb;">No message provided</i>'}
          </td>
        </tr>
      </table>
    </div>
  `;
}
