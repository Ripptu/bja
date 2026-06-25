import React from 'react';
import { 
  FileText, 
  Activity, 
  ShieldCheck, 
  Headphones, 
  Clock, 
  FolderTree, 
  Building2, 
  Sparkles, 
  GraduationCap, 
  Brain, 
  HeartPulse, 
  Stethoscope, 
  Scale,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Laptop,
  UserCheck,
  Award,
  ChevronRight,
  Send
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'FileText': return <FileText className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Headphones': return <Headphones className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'FolderTree': return <FolderTree className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'Scale': return <Scale className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    case 'ArrowRight': return <ArrowRight className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'Laptop': return <Laptop className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Award': return <Award className={className} />;
    case 'ChevronRight': return <ChevronRight className={className} />;
    case 'Send': return <Send className={className} />;
    default: return <FileText className={className} />;
  }
};
