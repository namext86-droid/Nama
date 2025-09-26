import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User } from 'lucide-react';
import NameResults from './NameResults';
import { addToHistory } from '@/lib/localStorage';

// todo: remove mock functionality - replace with real name generation
const mockNames = {
  male: ['Alexander', 'Benjamin', 'Christopher', 'Daniel', 'Ethan', 'Gabriel', 'Hassan', 'Ibrahim', 'James', 'Kevin'],
  female: ['Amelia', 'Charlotte', 'Emma', 'Isabella', 'Olivia', 'Sarah', 'Fatima', 'Zara', 'Priya', 'Ananya'],
  any: ['Alex', 'Taylor', 'Jordan', 'Casey', 'Morgan', 'Riley', 'Avery', 'Cameron', 'Quinn', 'Sage']
};

export default function PersonalNameGenerator() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    ageGroup: '',
    gender: '',
    religion: '',
    zodiac: '',
    nationality: '',
    popularity: ''
  });
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateNames = async () => {
    setIsLoading(true);
    console.log('Generating personal names with filters:', formData);
    
    // todo: remove mock functionality - simulate API call
    setTimeout(() => {
      const selectedGender = formData.gender || 'any';
      const namePool = mockNames[selectedGender as keyof typeof mockNames] || mockNames.any;
      const shuffled = [...namePool].sort(() => 0.5 - Math.random());
      const generatedNames = shuffled.slice(0, 8);
      setResults(generatedNames);
      
      // Add to history
      if (generatedNames.length > 0) {
        addToHistory(generatedNames, 'personal', formData);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2" data-testid="text-personal-title">
          <User className="h-5 w-5 text-primary" />
          {t('generators.personal.title')}
        </CardTitle>
        <CardDescription data-testid="text-personal-subtitle">
          {t('generators.personal.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ageGroup">{t('generators.personal.ageGroup')}</Label>
            <Select value={formData.ageGroup} onValueChange={(value) => setFormData({...formData, ageGroup: value})}>
              <SelectTrigger id="ageGroup" data-testid="select-age-group">
                <SelectValue placeholder="Select age group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="child">Child (0-12)</SelectItem>
                <SelectItem value="teen">Teen (13-19)</SelectItem>
                <SelectItem value="adult">Adult (20-64)</SelectItem>
                <SelectItem value="senior">Senior (65+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">{t('generators.personal.gender')}</Label>
            <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
              <SelectTrigger id="gender" data-testid="select-gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="religion">{t('generators.personal.religion')}</Label>
            <Select value={formData.religion} onValueChange={(value) => setFormData({...formData, religion: value})}>
              <SelectTrigger id="religion" data-testid="select-religion">
                <SelectValue placeholder="Select religion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="christian">Christian</SelectItem>
                <SelectItem value="islamic">Islamic</SelectItem>
                <SelectItem value="hindu">Hindu</SelectItem>
                <SelectItem value="buddhist">Buddhist</SelectItem>
                <SelectItem value="jewish">Jewish</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nationality">{t('generators.personal.nationality')}</Label>
            <Select value={formData.nationality} onValueChange={(value) => setFormData({...formData, nationality: value})}>
              <SelectTrigger id="nationality" data-testid="select-nationality">
                <SelectValue placeholder="Select nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="american">American</SelectItem>
                <SelectItem value="british">British</SelectItem>
                <SelectItem value="indian">Indian</SelectItem>
                <SelectItem value="arabic">Arabic</SelectItem>
                <SelectItem value="european">European</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={generateNames}
          className="w-full"
          disabled={isLoading}
          data-testid="button-generate-personal"
        >
          {t('generators.personal.generate')}
        </Button>

        <NameResults names={results} isLoading={isLoading} generatorType="personal" />
      </CardContent>
    </Card>
  );
}