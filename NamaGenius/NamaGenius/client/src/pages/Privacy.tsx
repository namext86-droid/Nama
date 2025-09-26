import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Cookie, Lock, AlertTriangle } from 'lucide-react';

export default function Privacy() {
  const { t } = useTranslation();

  const lastUpdated = "March 26, 2025";

  const privacyPrinciples = [
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Privacy by Design",
      description: "We built NamaX with privacy as a core principle, not an afterthought."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Local Storage Only",
      description: "Your favorites and history are stored locally on your device, not on our servers."
    },
    {
      icon: <Eye className="h-6 w-6 text-purple-600" />,
      title: "No Tracking",
      description: "We don't track your behavior or build profiles about your naming preferences."
    },
    {
      icon: <Lock className="h-6 w-6 text-orange-600" />,
      title: "Secure by Default",
      description: "All communications are encrypted and we follow industry-standard security practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <SEOHead 
        title="Privacy Policy - NamaX Name Generator"
        description="Learn about our privacy practices at NamaX. We prioritize your privacy with local storage, no tracking, and transparent data handling policies."
        keywords="privacy policy, data protection, local storage, no tracking, user privacy"
      />
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Privacy Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Our Privacy Commitment
            </CardTitle>
            <CardDescription>
              We believe your privacy is fundamental. Here's how we protect it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {privacyPrinciples.map((principle, index) => (
                <div key={index} className="flex gap-3" data-testid={`principle-${index}`}>
                  {principle.icon}
                  <div>
                    <h3 className="font-semibold text-foreground">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Local Storage Data</h3>
                <p className="text-muted-foreground">
                  We store the following information locally on your device using browser local storage:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Names you've marked as favorites</li>
                  <li>Your name generation history</li>
                  <li>Your language and theme preferences</li>
                  <li>Filter settings you've applied</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  This data never leaves your device and is not transmitted to our servers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Technical Information</h3>
                <p className="text-muted-foreground">
                  We may collect basic technical information necessary to operate the service:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Browser type and version (for compatibility)</li>
                  <li>Device type (mobile, tablet, desktop)</li>
                  <li>General location (country level only, for language defaults)</li>
                  <li>Error logs (to improve service reliability)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Local Data Usage</h3>
                <p className="text-muted-foreground">
                  Data stored locally on your device is used exclusively to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Remember your favorite names across sessions</li>
                  <li>Maintain your generation history</li>
                  <li>Preserve your language and theme preferences</li>
                  <li>Improve your user experience</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Service Improvement</h3>
                <p className="text-muted-foreground">
                  We may use aggregated, anonymized technical data to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Fix bugs and improve performance</li>
                  <li>Understand which features are most helpful</li>
                  <li>Ensure compatibility across different devices and browsers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                NamaX uses minimal cookies and tracking:
              </p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  We use only essential cookies required for the website to function properly, such as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Session management</li>
                  <li>Language preference storage</li>
                  <li>Theme selection (light/dark mode)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">No Third-Party Tracking</h3>
                <p className="text-muted-foreground">
                  We do not use:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Google Analytics or similar tracking services</li>
                  <li>Social media tracking pixels</li>
                  <li>Advertising cookies</li>
                  <li>Cross-site tracking mechanisms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect any data that might be transmitted:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>All communications are encrypted using HTTPS/TLS</li>
                <li>No personal data is stored on our servers</li>
                <li>Regular security updates and monitoring</li>
                <li>Secure hosting infrastructure with reputable providers</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Your Privacy Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Since most of your data is stored locally on your device, you have complete control:
              </p>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground">Access Your Data</h3>
                  <p className="text-muted-foreground text-sm">
                    All your data is accessible through the browser's developer tools or by exporting from the app.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Delete Your Data</h3>
                  <p className="text-muted-foreground text-sm">
                    Clear your browser's local storage or use the "Clear All" buttons in the app to delete your data.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Data Portability</h3>
                  <p className="text-muted-foreground text-sm">
                    Your favorites and history can be exported from your browser's local storage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-mono text-sm">privacy@namax.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review 
                this Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}