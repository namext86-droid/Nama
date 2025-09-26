import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Globe, Users, Sparkles, Shield, Zap } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Multilingual Support",
      description: "Support for English, Arabic, and Hindi with proper RTL text handling and cultural authenticity."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Multiple Generators",
      description: "Specialized generators for personal names, businesses, pets, places, and more unique categories."
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Favorites & History",
      description: "Save your favorite names and track generation history with local storage persistence."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Personality-Based Names",
      description: "Featured names that reflect specific personality traits and cultural meanings."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Privacy First",
      description: "All data stored locally on your device. No personal information sent to servers."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Fast & Responsive",
      description: "Optimized for speed with instant name generation and smooth user experience."
    }
  ];

  const teamValues = [
    {
      title: "Cultural Respect",
      description: "We honor the cultural significance and traditional meanings behind names from all cultures."
    },
    {
      title: "Quality Curation",
      description: "Every name in our database is carefully researched for authenticity and positive meaning."
    },
    {
      title: "User Privacy",
      description: "Your naming preferences and favorites remain private and secure on your device."
    },
    {
      title: "Continuous Innovation",
      description: "We regularly update our generators with new features and expanded name databases."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <SEOHead 
        title="About NamaX - Universal Name Generator"
        description="Learn about NamaX, the comprehensive multilingual name generator that celebrates cultural diversity and helps you find meaningful names with respect for traditions and modern needs."
        keywords="about namax, name generator mission, multilingual names, cultural diversity, naming traditions"
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
            About NamaX
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The universal name generator that celebrates cultural diversity while helping you find the perfect name for any purpose.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              NamaX was created to bridge cultures and celebrate the beautiful diversity of names from around the world. 
              We believe that choosing a name is one of life's most meaningful decisions, whether for a child, business, pet, or creative project. 
              Our platform combines traditional naming wisdom with modern technology to help you discover names that resonate with meaning and purpose.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-features-title">
            What Makes NamaX Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-values-title">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamValues.map((value, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-value-${index}`}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </Badge>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">The Story Behind NamaX</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="text-muted-foreground space-y-4">
              <p>
                NamaX was born from a simple observation: in our interconnected world, people from different cultures 
                often struggle to find names that honor their heritage while fitting into global contexts. Parents, 
                entrepreneurs, and creatives needed a tool that understood the cultural significance of names while 
                providing modern functionality.
              </p>
              <p>
                Our team of linguists, cultural researchers, and developers worked together to create a platform that 
                goes beyond simple name lists. We've carefully curated names from various cultures, researched their 
                meanings and origins, and built intelligent generators that consider personality traits, cultural context, 
                and modern trends.
              </p>
              <p>
                What started as a project to help multicultural families choose names for their children has grown into 
                a comprehensive naming platform serving individuals, families, and businesses worldwide. We're proud to 
                be part of countless naming journeys and to help preserve the beautiful traditions behind names from 
                every culture.
              </p>
              <p>
                Today, NamaX continues to evolve, adding new features, expanding our cultural coverage, and improving 
                our algorithms based on user feedback. We're committed to making name selection a joyful, meaningful 
                experience for everyone.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}