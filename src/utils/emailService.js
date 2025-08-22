// Email Service Utility
// This is a mock service for demonstration purposes
// In a real application, you would integrate with services like:
// - SendGrid, Mailgun, AWS SES, or similar email services

class EmailService {
  constructor() {
    this.sentEmails = new Map(); // Store sent emails in memory
  }

  // Send verification email
  async sendVerificationEmail(email, verificationCode) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store the email and code for verification
      this.sentEmails.set(email, {
        code: verificationCode,
        timestamp: Date.now(),
        expiresAt: Date.now() + (10 * 60 * 1000) // 10 minutes expiry
      });

      // Log the email details (in real app, this would send actual email)
      console.log('📧 Verification Email Sent:');
      console.log(`   To: ${email}`);
      console.log(`   Code: ${verificationCode}`);
      console.log(`   Expires: ${new Date(this.sentEmails.get(email).expiresAt).toLocaleString()}`);
      
      return {
        success: true,
        message: 'Verification email sent successfully',
        emailId: Date.now().toString()
      };
    } catch (error) {
      console.error('Failed to send verification email:', error);
      return {
        success: false,
        error: 'Failed to send verification email'
      };
    }
  }

  // Verify email code
  async verifyEmailCode(email, code) {
    try {
      const emailData = this.sentEmails.get(email);
      
      if (!emailData) {
        return {
          success: false,
          error: 'No verification email found for this address'
        };
      }

      // Check if code has expired
      if (Date.now() > emailData.expiresAt) {
        this.sentEmails.delete(email);
        return {
          success: false,
          error: 'Verification code has expired. Please request a new one.'
        };
      }

      // Check if code matches
      if (emailData.code !== code) {
        return {
          success: false,
          error: 'Invalid verification code'
        };
      }

      // Code is valid, remove it from storage
      this.sentEmails.delete(email);
      
      return {
        success: true,
        message: 'Email verified successfully'
      };
    } catch (error) {
      console.error('Failed to verify email code:', error);
      return {
        success: false,
        error: 'Failed to verify email code'
      };
    }
  }

  // Resend verification email
  async resendVerificationEmail(email) {
    try {
      // Remove any existing verification data
      this.sentEmails.delete(email);
      
      // Generate new verification code
      const newCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Send new verification email
      return await this.sendVerificationEmail(email, newCode);
    } catch (error) {
      console.error('Failed to resend verification email:', error);
      return {
        success: false,
        error: 'Failed to resend verification email'
      };
    }
  }

  // Check if email has pending verification
  hasPendingVerification(email) {
    const emailData = this.sentEmails.get(email);
    if (!emailData) return false;
    
    // Check if not expired
    return Date.now() <= emailData.expiresAt;
  }

  // Get verification status
  getVerificationStatus(email) {
    const emailData = this.sentEmails.get(email);
    if (!emailData) {
      return {
        hasVerification: false,
        isExpired: false,
        timeRemaining: 0
      };
    }

    const timeRemaining = emailData.expiresAt - Date.now();
    const isExpired = timeRemaining <= 0;

    return {
      hasVerification: true,
      isExpired,
      timeRemaining: Math.max(0, timeRemaining),
      expiresAt: emailData.expiresAt
    };
  }

  // Clean up expired verifications
  cleanupExpiredVerifications() {
    const now = Date.now();
    for (const [email, data] of this.sentEmails.entries()) {
      if (now > data.expiresAt) {
        this.sentEmails.delete(email);
      }
    }
  }
}

// Create singleton instance
const emailService = new EmailService();

// Clean up expired verifications every minute
setInterval(() => {
  emailService.cleanupExpiredVerifications();
}, 60000);

export default emailService;
