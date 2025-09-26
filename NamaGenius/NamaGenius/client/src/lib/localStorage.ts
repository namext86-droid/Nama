interface NameHistory {
  id: string;
  name: string;
  type: string;
  timestamp: number;
  filters?: Record<string, any>;
}

interface FavoriteName {
  id: string;
  name: string;
  type: string;
  timestamp: number;
}

const STORAGE_KEYS = {
  FAVORITES: 'namax-favorites',
  HISTORY: 'namax-history',
  PREFERENCES: 'namax-preferences'
} as const;

// Favorite Names Management
export const getFavoriteNames = (): FavoriteName[] => {
  try {
    const favorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return favorites ? JSON.parse(favorites) : [];
  } catch {
    return [];
  }
};

export const addToFavorites = (name: string, type: string): void => {
  try {
    const favorites = getFavoriteNames();
    const newFavorite: FavoriteName = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      type,
      timestamp: Date.now()
    };
    
    // Check if name already exists
    if (favorites.some(fav => fav.name.toLowerCase() === name.toLowerCase())) {
      return;
    }
    
    favorites.unshift(newFavorite);
    // Keep only last 100 favorites
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites.slice(0, 100)));
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};

export const removeFromFavorites = (name: string): void => {
  try {
    const favorites = getFavoriteNames();
    const filtered = favorites.filter(fav => fav.name.toLowerCase() !== name.toLowerCase());
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing from favorites:', error);
  }
};

export const isNameFavorited = (name: string): boolean => {
  try {
    const favorites = getFavoriteNames();
    return favorites.some(fav => fav.name.toLowerCase() === name.toLowerCase());
  } catch {
    return false;
  }
};

// Generation History Management  
export const getGenerationHistory = (): NameHistory[] => {
  try {
    const history = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return history ? JSON.parse(history) : [];
  } catch {
    return [];
  }
};

export const addToHistory = (names: string[], type: string, filters?: Record<string, any>): void => {
  try {
    const history = getGenerationHistory();
    const timestamp = Date.now();
    
    const historyEntries: NameHistory[] = names.map(name => ({
      id: `${timestamp}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      type,
      timestamp,
      filters
    }));
    
    history.unshift(...historyEntries);
    // Keep only last 500 entries
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history.slice(0, 500)));
  } catch (error) {
    console.error('Error adding to history:', error);
  }
};

export const clearHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  } catch (error) {
    console.error('Error clearing history:', error);
  }
};

// User Preferences
interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  defaultFilters: Record<string, any>;
}

export const getUserPreferences = (): Partial<UserPreferences> => {
  try {
    const prefs = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    return prefs ? JSON.parse(prefs) : {};
  } catch {
    return {};
  }
};

export const updateUserPreferences = (updates: Partial<UserPreferences>): void => {
  try {
    const current = getUserPreferences();
    const updated = { ...current, ...updates };
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(updated));
  } catch (error) {
    console.error('Error updating preferences:', error);
  }
};

// Search and Filter Utilities
export const searchNames = (names: string[], query: string): string[] => {
  if (!query.trim()) return names;
  
  const searchTerm = query.toLowerCase();
  return names.filter(name => 
    name.toLowerCase().includes(searchTerm) ||
    name.toLowerCase().startsWith(searchTerm)
  );
};

export const filterNamesByLength = (names: string[], minLength?: number, maxLength?: number): string[] => {
  return names.filter(name => {
    const length = name.length;
    if (minLength !== undefined && length < minLength) return false;
    if (maxLength !== undefined && length > maxLength) return false;
    return true;
  });
};