import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  LucideAngularModule,
  Sparkles, Heart, Lightbulb, Rocket, Compass, Briefcase, GraduationCap,
  Target, Languages, BookOpen, Cpu, MapPin, CheckCircle2, Award, ShieldCheck,
  Send, Code2, Monitor, Server, Database, GitBranch, Mail, Linkedin,
  ArrowRight, Menu, X, User, Layers
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Sparkles, Heart, Lightbulb, Rocket, Compass, Briefcase, GraduationCap,
        Target, Languages, BookOpen, Cpu, MapPin, CheckCircle2, Award, ShieldCheck,
        Send, Code2, Monitor, Server, Database, GitBranch, Mail, Linkedin,
        ArrowRight, Menu, X, User, Layers
      })
    )
  ]
};