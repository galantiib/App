using CRUDApi_DotNet8.Entities;
using MailKit;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;

public class EmailService
{
    private readonly EmailSettings _settings;

    public EmailService(IOptions<EmailSettings> settings)
    {
        _settings = settings.Value;
    }

    public async System.Threading.Tasks.Task SendEmailAsync(string toEmail, string subject, string body)


    {
        try
        {
            var email = new MimeMessage();
            email.From.Add(new MailboxAddress(_settings.FromName, _settings.FromEmail));
            email.To.Add(MailboxAddress.Parse(toEmail));
            email.Subject = subject;
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = body };

            using var smtp = new SmtpClient(new ProtocolLogger(Console.OpenStandardOutput()));
            await smtp.ConnectAsync(_settings.SmtpServer, _settings.SmtpPort, MailKit.Security.SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(_settings.SmtpUser, _settings.SmtpPass);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);

            Console.WriteLine($"✅ Email sent to {toEmail}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Failed to send email to {toEmail}: {ex.Message}");
        }   
    }
}
