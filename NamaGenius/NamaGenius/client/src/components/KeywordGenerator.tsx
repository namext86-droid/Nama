import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Hash } from 'lucide-react';
import NameResults from './NameResults';
import { addToHistory } from '@/lib/localStorage';

// todo: remove mock functionality - replace with real keyword generation
const mockSynonyms = {
  fire: ['Blaze', 'Ignite', 'Flame', 'Spark', 'Ember', 'Phoenix', 'Inferno', 'Cinder'],
  water: ['Aqua', 'Flow', 'Stream', 'Wave', 'Tide', 'Rain', 'Ocean', 'River'],
  light: ['Lumina', 'Glow', 'Shine', 'Bright', 'Aurora', 'Radiant', 'Beam', 'Flash'],
  strong: ['Power', 'Mighty', 'Force', 'Steel', 'Stone', 'Iron', 'Titan', 'Bold'],
  happy: ['Joy', 'Bliss', 'Cheer', 'Bright', 'Sunny', 'Merry', 'Glad', 'Smile']
};

export default function KeywordGenerator() {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState('');
  const [minLength, setMinLength] = useState([3]);
  const [maxLength, setMaxLength] = useState([12]);
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateNames = async () => {
    if (!keyword.trim()) return;
    
    setIsLoading(true);
    console.log('Generating keyword-based names for:', keyword, 'with length range:', minLength[0], '-', maxLength[0]);
    
    // todo: remove mock functionality - simulate keyword processing
    setTimeout(() => {
      const baseKeyword = keyword.toLowerCase().trim();
      const synonyms = mockSynonyms[baseKeyword as keyof typeof mockSynonyms] || [];
      let generatedNames: string[] = [];
      
      if (synonyms.length > 0) {
        const filtered = synonyms.filter(name => 
          name.length >= minLength[0] && name.length <= maxLength[0]
        );
        generatedNames = filtered.slice(0, 10);
      } else {
        // Generate variations of the keyword
        const variations = [
          keyword + 'ify',
          keyword + 'ine',
          'Pro' + keyword,
          keyword + 'X',
          keyword + 'Hub',
          'Smart' + keyword,
          keyword + 'ly',
          'My' + keyword
        ].filter(name => name.length >= minLength[0] && name.length <= maxLength[0]);
        
        generatedNames = variations.slice(0, 8);
      }
      
      setResults(generatedNames);
      
      // Add to history
      if (generatedNames.length > 0) {
        addToHistory(generatedNames, 'keyword', { keyword, minLength: minLength[0], maxLength: maxLength[0] });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2" data-testid="text-keyword-title">
          <Hash className="h-5 w-5 text-primary" />
          {t('generators.keyword.title')}
        </CardTitle>
        <CardDescription data-testid="text-keyword-subtitle">
          {t('generators.keyword.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="keyword">{t('generators.keyword.keyword')}</Label>
          <Input
            id="keyword"
            type="text"
            placeholder="e.g., fire, water, strong"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            data-testid="input-keyword"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>{t('generators.keyword.minLength')}: {minLength[0]}</Label>
            <Slider
              value={minLength}
              onValueChange={setMinLength}
              max={20}
              min={1}
              step={1}
              className="w-full"
              data-testid="slider-min-length"
            />
          </div>

          <div className="space-y-2">
            <Label>{t('generators.keyword.maxLength')}: {maxLength[0]}</Label>
            <Slider
              value={maxLength}
              onValueChange={setMaxLength}
              max={25}
              min={minLength[0]}
              step={1}
              className="w-full"
              data-testid="slider-max-length"
            />
          </div>
        </div>

        <Button 
          onClick={generateNames}
          className="w-full"
          disabled={isLoading || !keyword.trim()}
          data-testid="button-generate-keyword"
        >
          {t('generators.keyword.generate')}
        </Button>

        <NameResults names={results} isLoading={isLoading} generatorType="keyword" />
      </CardContent>
    </Card>
  );
}