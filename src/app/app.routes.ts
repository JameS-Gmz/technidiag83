import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DevisComponent } from '../components/devis/devis.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PlombComponent } from '../components/plomb/plomb.component';
import { LoiComponent } from '../components/loi/loi.component';
import { DPEComponent } from '../components/dpe/dpe.component';
import { AmianteComponent } from '../components/amiante/amiante.component';
import { ElectricityComponent } from '../components/electricity/electricity.component';
import { TermiteComponent } from '../components/termite/termite.component';
import { GazComponent } from '../components/gaz/gaz.component';
import { ErpComponent } from '../components/erp/erp.component';
import { DiagnosticVenteComponent } from '../components/diagnostic-vente/diagnostic-vente.component';
import { DiagnosticLocationComponent } from '../components/diagnostic-location/diagnostic-location.component';

export const routes: Routes = [
    {path : "",component:HomeComponent},
    {path : "devis",component:DevisComponent},
    {path : "contact",component:ContactComponent},
    {path : "loiCarrezOuBouttin",component:LoiComponent},
    {path : "amiante",component:AmianteComponent},
    {path : "dpe",component:DPEComponent},
    {path : "electricite",component:ElectricityComponent},
    {path : "termite",component:TermiteComponent},
    {path : "plomb",component:PlombComponent},
    {path : "gaz",component:GazComponent},
    {path : "erp",component:ErpComponent},
    {path : "diagnosticVente",component:DiagnosticVenteComponent},
    {path : "diagnosticLocation",component:DiagnosticLocationComponent},
];

