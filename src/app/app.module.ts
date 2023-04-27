import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientSliderComponent } from './components/client-slider/client-slider.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CompanyServiceComponent } from './components/company-service/company-service.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InnerBannerComponent } from './components/inner-banner/inner-banner.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ProcessComponent } from './components/process/process.component';
import { FeaturesComponent } from './components/features/features.component';
import { WebsiteDesigningComponent } from './components/website-designing/website-designing.component';
import { SeoComponent } from './components/seo/seo.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { ExplainerComponent } from './components/explainer/explainer.component';
import { FlyerDesignComponent } from './components/flyer-design/flyer-design.component';
import { AppDevelopmentComponent } from './components/app-development/app-development.component';
import { StationaryBrandingComponent } from './components/stationary-branding/stationary-branding.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSliderComponent,
    ServicesComponent,
    ClientSliderComponent,
    ContactUsComponent,
    FooterComponent,
    PortfolioComponent,
    CompanyServiceComponent,
    OurWorkComponent,
    HomeComponent,
    InnerBannerComponent,
    PortfolioPageComponent,
    AboutUsComponent,
    ContactPageComponent,
    ProcessComponent,
    FeaturesComponent,
    WebsiteDesigningComponent,
    SeoComponent,
    EcommerceComponent,
    ExplainerComponent,
    FlyerDesignComponent,
    AppDevelopmentComponent,
    StationaryBrandingComponent,
    DigitalMarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
