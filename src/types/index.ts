// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Feature card types
export interface FeatureCardProps extends BaseComponentProps {
  icon: string;
  title: string;
  description: string;
  id: string;
}

// Button variant types
export type ButtonVariant = 
  | 'default' 
  | 'destructive' 
  | 'outline' 
  | 'secondary' 
  | 'ghost' 
  | 'link';

export type ButtonSize = 
  | 'default' 
  | 'sm' 
  | 'lg' 
  | 'icon';

// Layout types
export interface MainLayoutProps extends BaseComponentProps {
  title?: string;
  description?: string;
}