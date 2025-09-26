import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Globe, Moon, Sun, Menu, Home, BookOpen, Info, Shield, FileText, MessageSquare } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const languages = [
  { code: 'en', name: 'English', flag: 'EN' },
  { code: 'ar', name: 'العربية', flag: 'AR' },
  { code: 'hi', name: 'हिन्दी', flag: 'HI' }
];

export default function Header() {
  const { i18n, t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { path: '/blog', label: 'Blog', icon: <BookOpen className="h-4 w-4" /> },
    { path: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
    { path: '/contact', label: 'Contact', icon: <MessageSquare className="h-4 w-4" /> },
  ];

  const legalItems = [
    { path: '/privacy', label: 'Privacy Policy', icon: <Shield className="h-4 w-4" /> },
    { path: '/terms', label: 'Terms of Service', icon: <FileText className="h-4 w-4" /> },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Handle RTL for Arabic
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer" data-testid="text-logo">
              {t('nav.title')}
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Mobile Navigation Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navigationItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link href={item.path} className="flex items-center gap-2 w-full">
                    {item.icon}
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              {legalItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link href={item.path} className="flex items-center gap-2 w-full">
                    {item.icon}
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="button-language">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t('nav.language')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={i18n.language === lang.code ? 'bg-accent' : ''}
                  data-testid={`button-lang-${lang.code}`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}