import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { StationaryBrandingComponent } from './components/stationary-branding/stationary-branding.component';
import { AppDevelopmentComponent } from './components/app-development/app-development.component';
import { FlyerDesignComponent } from './components/flyer-design/flyer-design.component';
import { ExplainerComponent } from './components/explainer/explainer.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { SeoComponent } from './components/seo/seo.component';
import { WebsiteDesigningComponent } from './components/website-designing/website-designing.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'',component:HomeComponent},
  {path:'portfolio',component:PortfolioPageComponent,
  data:{
    headerText: 'Portfolio',
  }},
  {path:'about-us',component:AboutUsComponent,
  data:{
    headerText: 'About Us',
  }},
  {path:'contact-us',component:ContactPageComponent,
  data:{
    headerText: 'Contact Us',
  }},
  {path:'website-designing',component:WebsiteDesigningComponent,
  data:{
    headerText: 'Web Design And Development',
  }},
  {path:'seo',component:SeoComponent,
  data:{
    headerText: 'Search Engine Optimization',
  }},
  {path:'e-commerce',component:EcommerceComponent,
  data:{
    headerText: 'Ecommerce Development',
  }},
  {path:'explainer-videos',component:ExplainerComponent,
  data:{
    headerText: '2D Animation Or Explainer Videos',
  }},
  {path:'flyer-design',component:FlyerDesignComponent,
  data:{
    headerText: 'Flyer and Brochure Designs',
  }},
  {path:'app-development',component:AppDevelopmentComponent,
  data:{
    headerText: 'Mobile Apps Development',
  }},
  {path:'stationary-branding',component:StationaryBrandingComponent,
  data:{
    headerText: 'Stationary & Branding Designs',
  }},
  {path:'digital-marketing',component:DigitalMarketingComponent,
  data:{
    headerText: 'Digital Or Internet Marketing',
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
