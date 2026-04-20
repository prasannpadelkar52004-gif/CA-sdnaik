import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { Tax } from './pages/tax/tax';
import { Accounting } from './pages/accounting/accounting';
import { Audit } from './pages/audit/audit';
import { Analysis } from './pages/analysis/analysis';
import { Payroll } from './pages/payroll/payroll';
import { Finalisation } from './pages/finalisation/finalisation';
import { Mis } from './pages/mis/mis';
import { Statements } from './pages/statements/statements';

export const routes: Routes = [
{ path: '', component: Home },                 // ✅ homepage
{ path: 'about', component: About },           // ✅ about page
{ path: 'contactus', component: ContactComponent },
{ path: 'tax-preparation', component: Tax },
{ path: 'accounting-bookkeeping', component: Accounting },
{ path: 'audit', component: Audit },
{ path: 'financial-analysis', component: Analysis },
{ path: 'payroll', component: Payroll },
{ path: 'finalisation', component: Finalisation },
{ path: 'mis-reporting', component: Mis },
{ path: 'financial-statements', component: Statements }
];