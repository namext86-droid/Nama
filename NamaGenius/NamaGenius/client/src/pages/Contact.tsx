import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, Phone, MapPin, Clock, Send, CheckCircle, HelpCircle, Bug, Lightbulb } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // todo: remove mock functionality - implement real form submission
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', category: '', message: '' });
    }, 3000);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Support",
      description: "Get help with any questions or issues",
      contact: "support@namax.com",
      responseTime: "Usually within 24 hours"
    },
    {
      icon: <Bug className="h-6 w-6 text-orange-500" />,
      title: "Bug Reports",
      description: "Report technical issues or bugs",
      contact: "bugs@namax.com", 
      responseTime: "Priority handling"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "Feature Requests",
      description: "Suggest new features or improvements",
      contact: "feedback@namax.com",
      responseTime: "We review all suggestions"
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-blue-500" />,
      title: "General Inquiries",
      description: "Business partnerships and other questions",
      contact: "hello@namax.com",
      responseTime: "2-3 business days"
    }
  ];

  const faqItems = [
    {
      question: "How do I save my favorite names?",
      answer: "Click the heart icon next to any generated name to add it to your favorites. Your favorites are saved locally on your device and accessible through the 'My Favorites' tab."
    },
    {
      question: "Can I use generated names commercially?",
      answer: "Yes, you can use any generated names for personal or commercial purposes. However, we recommend checking for existing trademarks or domain availability for business use."
    },
    {
      question: "Why aren't my favorites showing up?",
      answer: "Favorites are stored in your browser's local storage. If you've cleared your browser data or are using a different device/browser, your favorites won't be available. We're working on account-based syncing for the future."
    },
    {
      question: "How accurate are the name meanings?",
      answer: "We strive for accuracy in our name meanings and origins, sourcing from reputable linguistic and cultural databases. However, name meanings can vary across cultures and time periods, so we recommend additional research for important decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <SEOHead 
        title="Contact Us - NamaX Support & Feedback"
        description="Get in touch with the NamaX team for support, feedback, or feature requests. We're here to help you with your naming needs and answer any questions."
        keywords="contact namax, customer support, feedback, help, questions, name generator support"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, suggestions, or need help? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8" data-testid="success-message">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          required
                          data-testid="input-name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => updateField('category', value)}>
                        <SelectTrigger id="category" data-testid="select-category">
                          <SelectValue placeholder="What is this about?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="cultural">Cultural/Name Accuracy</SelectItem>
                          <SelectItem value="business">Business Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Brief description of your message"
                        value={formData.subject}
                        onChange={(e) => updateField('subject', e.target.value)}
                        required
                        data-testid="input-subject"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question or feedback..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        required
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full"
                      data-testid="button-submit"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Choose the best way to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="space-y-2" data-testid={`contact-method-${index}`}>
                    <div className="flex items-center gap-2">
                      {method.icon}
                      <h3 className="font-semibold text-sm">{method.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                    <div className="font-mono text-sm text-primary">{method.contact}</div>
                    <Badge variant="secondary" className="text-xs">
                      {method.responseTime}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Quick FAQ</CardTitle>
                <CardDescription>
                  Common questions and answers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="space-y-2" data-testid={`faq-${index}`}>
                    <h3 className="font-semibold text-sm">{item.question}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardHeader>
                <CardTitle>Response Times</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Support Requests</p>
                    <p className="text-xs text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bug className="h-4 w-4 text-orange-500" />
                  <div>
                    <p className="text-sm font-medium">Bug Reports</p>
                    <p className="text-xs text-muted-foreground">Priority handling, same day</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">General Inquiries</p>
                    <p className="text-xs text-muted-foreground">2-3 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}