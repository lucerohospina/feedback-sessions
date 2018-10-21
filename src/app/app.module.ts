import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

// Components
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { MainComponent } from './commons/main/main.component'
import { HomeComponent } from './pages/home/home.component'
import { HeaderComponent } from './commons/header/header.component'
import { SidemenuComponent } from './commons/sidemenu/sidemenu.component'
import { GiveFeedbackComponent } from './pages/give-feedback/give-feedback.component'

// Prime Ng Component
import { InputSwitchModule } from 'primeng/inputswitch'
import { TooltipModule } from 'primeng/tooltip'

const routes : Routes = [
  { path : '', component : LoginComponent },
  { path : '', component : MainComponent, children: [
    { path : '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'give-feddback', component: GiveFeedbackComponent }
  ] },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    HeaderComponent,
    SidemenuComponent,
    GiveFeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    InputSwitchModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
