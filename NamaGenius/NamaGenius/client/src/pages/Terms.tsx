import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, AlertTriangle, Scale, Users, Zap } from 'lucide-react';

export default function Terms() {
  const { t } = useTranslation();

  const lastUpdated = "March 26, 2025";

  return (
    <div className="min-h-screen bg-background py-12">
      <SEOHead 
        title="Terms of Service - NamaX Name Generator"
        description="Read the terms of service for NamaX. Understand your rights and responsibilities when using our multilingual name generator platform."
        keywords="terms of service, user agreement, name generator terms, namax legal"
      />
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-terms-title">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Welcome to NamaX! These Terms of Service ("Terms") govern your use of our website and services. 
              By accessing or using NamaX, you agree to be bound by these Terms. If you disagree with any part 
              of these terms, then you may not access the service.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Use of Service */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Use of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Permitted Use</h3>
                <p className="text-muted-foreground">
                  NamaX is designed for personal, educational, and commercial use in finding names for various purposes. You may:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Generate names for personal projects, children, pets, businesses, etc.</li>
                  <li>Use generated names in your personal or commercial projects</li>
                  <li>Share names you discover with friends and family</li>
                  <li>Use the service for research and educational purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Prohibited Use</h3>
                <p className="text-muted-foreground">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Attempt to reverse engineer, hack, or compromise our systems</li>
                  <li>Use automated tools to scrape large amounts of data from our service</li>
                  <li>Upload or transmit harmful content, including malware or spam</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Service Content</h3>
                <p className="text-muted-foreground">
                  The NamaX website, including its design, code, algorithms, and curated name databases, is owned by 
                  NamaX and protected by copyright and other intellectual property laws. You may not copy, modify, 
                  distribute, or create derivative works from our service without explicit permission.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Generated Names</h3>
                <p className="text-muted-foreground">
                  Names generated by our service are not subject to copyright protection by NamaX. You are free to use 
                  any names generated for your personal or commercial purposes. However, we cannot guarantee that any 
                  generated name is not trademarked, copyrighted, or otherwise protected by third parties.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Cultural Respect</h3>
                <p className="text-muted-foreground">
                  Many names in our database have cultural, religious, or historical significance. We encourage users 
                  to research and respect the cultural context of names, especially when using names from cultures 
                  different from their own.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Name Availability</h3>
                <p className="text-muted-foreground">
                  We do not guarantee that any generated name is available for use as a domain name, business name, 
                  trademark, or other legal purposes. Users are responsible for conducting their own research and 
                  legal checks before using names for official purposes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Cultural Accuracy</h3>
                <p className="text-muted-foreground">
                  While we strive to provide accurate cultural and linguistic information, we cannot guarantee the 
                  complete accuracy of name meanings, origins, or cultural contexts. We encourage users to conduct 
                  additional research for important naming decisions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Service Availability</h3>
                <p className="text-muted-foreground">
                  We aim to keep NamaX available 24/7, but we do not guarantee uninterrupted access. The service may 
                  be temporarily unavailable due to maintenance, updates, or unforeseen technical issues.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Privacy and Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Your privacy is important to us. Our data collection and use practices are detailed in our 
                Privacy Policy, which is incorporated into these Terms by reference. By using NamaX, you also 
                agree to our Privacy Policy.
              </p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Local Storage</h3>
                <p className="text-muted-foreground">
                  NamaX uses local storage in your browser to save your preferences, favorites, and history. 
                  This data remains on your device and is not transmitted to our servers. You can clear this 
                  data at any time through your browser settings or our app interface.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, NamaX and its operators shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether 
                incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses 
                resulting from your use of the service.
              </p>
              
              <p className="text-muted-foreground">
                Our total liability for any claims related to the service shall not exceed the amount you paid to 
                use the service in the 12 months preceding the claim (which, for our free service, would be $0).
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of any material 
                changes by updating the "Last updated" date and posting the new Terms on our website. Continued 
                use of the service after changes constitutes acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We may terminate or suspend your access to the service at any time, without prior notice or liability, 
                if you breach these Terms. You may also stop using the service at any time.
              </p>
              
              <p className="text-muted-foreground">
                Upon termination, your right to use the service will cease immediately. Data stored locally on your 
                device will remain until you choose to delete it.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of [Jurisdiction], without 
                regard to its conflict of law provisions. Any disputes arising from these Terms or the use of our 
                service shall be resolved through binding arbitration or in the courts of [Jurisdiction].
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-mono text-sm">legal@namax.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}