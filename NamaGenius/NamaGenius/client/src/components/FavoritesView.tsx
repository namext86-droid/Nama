import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Trash2, Copy, Check } from 'lucide-react';
import { getFavoriteNames, removeFromFavorites, clearHistory } from '@/lib/localStorage';

interface FavoriteName {
  id: string;
  name: string;
  type: string;
  timestamp: number;
}

export default function FavoritesView() {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState<FavoriteName[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    const favs = getFavoriteNames();
    setFavorites(favs);
  };

  const handleRemoveFavorite = (name: string, id: string) => {
    removeFromFavorites(name);
    setFavorites(prev => prev.filter(fav => fav.id !== id));
    console.log('Removed favorite:', name);
  };

  const handleCopyName = async (name: string, id: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedId(id);
      console.log('Name copied:', name);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const clearAllFavorites = () => {
    // Clear favorites by removing them one by one
    favorites.forEach(fav => removeFromFavorites(fav.name));
    setFavorites([]);
    console.log('All favorites cleared');
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  const getTypeColor = (type: string) => {
    const colors = {
      personal: 'bg-primary text-primary-foreground',
      keyword: 'bg-green-500 text-white dark:bg-green-700', 
      company: 'bg-purple-500 text-white dark:bg-purple-700',
      pet: 'bg-pink-500 text-white dark:bg-pink-700',
      place: 'bg-orange-500 text-white dark:bg-orange-700',
      gift: 'bg-destructive text-destructive-foreground',
      nickname: 'bg-yellow-500 text-black dark:bg-yellow-600 dark:text-white',
      leader: 'bg-blue-500 text-white dark:bg-blue-700',
      random: 'bg-secondary text-secondary-foreground'
    };
    return colors[type as keyof typeof colors] || 'bg-secondary text-secondary-foreground';
  };

  if (favorites.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2" data-testid="text-favorites-title">
            <Heart className="h-5 w-5 text-primary" />
            Your Favorite Names
          </CardTitle>
          <CardDescription>
            Names you've liked will appear here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground" data-testid="text-no-favorites">
            <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No favorite names yet</p>
            <p className="text-sm">Start generating names and click the heart icon to save them!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between" data-testid="text-favorites-title">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Your Favorite Names ({favorites.length})
          </div>
          {favorites.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFavorites}
              data-testid="button-clear-favorites"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )}
        </CardTitle>
        <CardDescription>
          Your collection of liked names
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {favorites.map((favorite) => (
            <div
              key={favorite.id}
              className="flex items-center justify-between p-3 border rounded-lg hover-elevate"
              data-testid={`card-favorite-${favorite.id}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground" data-testid={`text-favorite-name-${favorite.id}`}>
                  {favorite.name}
                </span>
                <Badge 
                  variant="secondary" 
                  className={`text-white ${getTypeColor(favorite.type)}`}
                  data-testid={`badge-favorite-type-${favorite.id}`}
                >
                  {favorite.type}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {formatDate(favorite.timestamp)}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopyName(favorite.name, favorite.id)}
                  data-testid={`button-copy-favorite-${favorite.id}`}
                >
                  {copiedId === favorite.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveFavorite(favorite.name, favorite.id)}
                  className="text-destructive hover:text-destructive"
                  data-testid={`button-remove-favorite-${favorite.id}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}