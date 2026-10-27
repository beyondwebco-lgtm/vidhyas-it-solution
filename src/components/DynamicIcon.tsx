import React from "react";
import {
  Code2,
  FileCode2,
  Coffee,
  Terminal,
  Cpu,
  Globe,
  Layers,
  Laptop,
  BarChart3,
  FileSpreadsheet,
  PieChart,
  TrendingUp,
  BrainCircuit,
  Sparkles,
  Building2,
  Calculator,
  FileText,
  Receipt,
  Languages,
  MessageSquare,
  Award,
  CheckCircle,
  Compass,
  BookOpen,
  GraduationCap,
  BookMarked,
  HelpCircle,
  LucideProps,
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  switch (name) {
    case "Code2":
      return <Code2 {...props} />;
    case "FileCode2":
      return <FileCode2 {...props} />;
    case "Coffee":
      return <Coffee {...props} />;
    case "Terminal":
      return <Terminal {...props} />;
    case "Cpu":
      return <Cpu {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "Layers":
      return <Layers {...props} />;
    case "Laptop":
      return <Laptop {...props} />;
    case "BarChart3":
      return <BarChart3 {...props} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet {...props} />;
    case "PieChart":
      return <PieChart {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "BrainCircuit":
      return <BrainCircuit {...props} />;
    case "Sparkles":
      return <Sparkles {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "Calculator":
      return <Calculator {...props} />;
    case "FileText":
      return <FileText {...props} />;
    case "Receipt":
      return <Receipt {...props} />;
    case "Languages":
      return <Languages {...props} />;
    case "MessageSquare":
      return <MessageSquare {...props} />;
    case "Award":
      return <Award {...props} />;
    case "CheckCircle":
      return <CheckCircle {...props} />;
    case "Compass":
      return <Compass {...props} />;
    case "BookOpen":
      return <BookOpen {...props} />;
    case "GraduationCap":
      return <GraduationCap {...props} />;
    case "BookMarked":
      return <BookMarked {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
}
