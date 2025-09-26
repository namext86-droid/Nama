import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Building2, Heart, MapPin, Gift, MessageSquare, Crown, Shuffle } from 'lucide-react';
import NameResults from './NameResults';
import { addToHistory } from '@/lib/localStorage';

// todo: remove mock functionality - replace with real specialized generators
const mockData = {
  company: ['TechFlow', 'DataStream', 'CloudSync', 'InnovateLab', 'DigitalForge', 'SmartBridge', 'NextGen Solutions', 'ProActive'],
  pet: ['Buddy', 'Luna', 'Max', 'Bella', 'Charlie', 'Lucy', 'Cooper', 'Daisy', 'Rocky', 'Molly'],
  place: ['Sunset Vista', 'Golden Harbor', 'Crystal Peak', 'Willowbrook', 'Pine Valley', 'Riverside', 'Mountain View', 'Ocean Breeze'],
  gift: ['Personalized Photo Album', 'Bluetooth Speakers', 'Cozy Blanket', 'Coffee Gift Set', 'Plant Starter Kit', 'Art Supplies', 'Gaming Headset', 'Spa Kit'],
  nickname: ['Ace', 'Spark', 'Dash', 'Sunny', 'Rocket', 'Tiger', 'Phoenix', 'Storm'],
  leader: ['Abdullah', 'Rajesh', 'Mohamed', 'David', 'Ahmad', 'Samuel', 'Ibrahim', 'Michael'],
  random: ['Aurora', 'Phoenix', 'River', 'Sage', 'Storm', 'Luna', 'Atlas', 'Nova', 'Orion', 'Willow']
};

interface GeneratorProps {
  type: keyof typeof mockData;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function SpecializedGenerator({ type, icon, title, subtitle }: GeneratorProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateNames = async () => {
    setIsLoading(true);
    console.log(`Generating ${type} names with filters:`, formData);
    
    // todo: remove mock functionality - simulate specialized generation
    setTimeout(() => {
      const names = mockData[type];
      const shuffled = [...names].sort(() => 0.5 - Math.random());
      const generatedNames = shuffled.slice(0, 6);
      setResults(generatedNames);
      
      // Add to history
      if (generatedNames.length > 0) {
        addToHistory(generatedNames, type, formData);
      }
      
      setIsLoading(false);
    }, 800);
  };

  const renderFormFields = () => {
    switch (type) {
      case 'company':
        return (
          <>
            <div className="space-y-2">
              <Label>{t('generators.company.industry')}</Label>
              <Select value={formData.industry || ''} onValueChange={(value) => setFormData({...formData, industry: value})}>
                <SelectTrigger data-testid="select-company-industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="health">Healthcare</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t('generators.company.style')}</Label>
              <Select value={formData.style || ''} onValueChange={(value) => setFormData({...formData, style: value})}>
                <SelectTrigger data-testid="select-company-style">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                  <SelectItem value="traditional">Traditional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );
      
      case 'pet':
        return (
          <>
            <div className="space-y-2">
              <Label>{t('generators.pet.petType')}</Label>
              <Select value={formData.petType || ''} onValueChange={(value) => setFormData({...formData, petType: value})}>
                <SelectTrigger data-testid="select-pet-type">
                  <SelectValue placeholder="Select pet type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dog">Dog</SelectItem>
                  <SelectItem value="cat">Cat</SelectItem>
                  <SelectItem value="bird">Bird</SelectItem>
                  <SelectItem value="rabbit">Rabbit</SelectItem>
                  <SelectItem value="fish">Fish</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t('generators.pet.personality')}</Label>
              <Select value={formData.personality || ''} onValueChange={(value) => setFormData({...formData, personality: value})}>
                <SelectTrigger data-testid="select-pet-personality">
                  <SelectValue placeholder="Select personality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="playful">Playful</SelectItem>
                  <SelectItem value="calm">Calm</SelectItem>
                  <SelectItem value="energetic">Energetic</SelectItem>
                  <SelectItem value="gentle">Gentle</SelectItem>
                  <SelectItem value="brave">Brave</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );

      case 'nickname':
        return (
          <div className="space-y-2">
            <Label>{t('generators.nickname.baseName')}</Label>
            <Input
              placeholder="Enter base name"
              value={formData.baseName || ''}
              onChange={(e) => setFormData({...formData, baseName: e.target.value})}
              data-testid="input-base-name"
            />
          </div>
        );

      default:
        return (
          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={formData.category || ''} onValueChange={(value) => setFormData({...formData, category: value})}>
              <SelectTrigger data-testid={`select-${type}-category`}>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
                <SelectItem value="unique">Unique</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2" data-testid={`text-${type}-title`}>
          {icon}
          {title}
        </CardTitle>
        <CardDescription data-testid={`text-${type}-subtitle`}>
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {renderFormFields()}
        </div>

        <Button 
          onClick={generateNames}
          className="w-full"
          disabled={isLoading}
          data-testid={`button-generate-${type}`}
        >
          {t(`generators.${type}.generate`)}
        </Button>

        <NameResults names={results} isLoading={isLoading} generatorType={type} />
      </CardContent>
    </Card>
  );
}

export default function SpecializedGenerators() {
  const { t } = useTranslation();

  const generators = [
    {
      type: 'company' as const,
      icon: <Building2 className="h-5 w-5 text-primary" />,
      title: t('generators.company.title'),
      subtitle: t('generators.company.subtitle')
    },
    {
      type: 'pet' as const,
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: t('generators.pet.title'),
      subtitle: t('generators.pet.subtitle')
    },
    {
      type: 'place' as const,
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: t('generators.place.title'),
      subtitle: t('generators.place.subtitle')
    },
    {
      type: 'gift' as const,
      icon: <Gift className="h-5 w-5 text-primary" />,
      title: t('generators.gift.title'),
      subtitle: t('generators.gift.subtitle')
    },
    {
      type: 'nickname' as const,
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      title: t('generators.nickname.title'),
      subtitle: t('generators.nickname.subtitle')
    },
    {
      type: 'leader' as const,
      icon: <Crown className="h-5 w-5 text-primary" />,
      title: t('generators.leader.title'),
      subtitle: t('generators.leader.subtitle')
    },
    {
      type: 'random' as const,
      icon: <Shuffle className="h-5 w-5 text-primary" />,
      title: t('generators.random.title'),
      subtitle: t('generators.random.subtitle')
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {generators.map((generator) => (
        <SpecializedGenerator key={generator.type} {...generator} />
      ))}
    </div>
  );
}