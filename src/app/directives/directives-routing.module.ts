import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { DeliveryAddressInfoComponent } from './delivery-address-info/delivery-address-info.component';

const directivesRoutes: Routes = [
    {
        path: '', children: [
            { path: '', component: DirectivesDemoComponent },
            { path: 'deliveryAddressInfo', component: DeliveryAddressInfoComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(directivesRoutes)],
    exports: [RouterModule],
    providers: []
})
export class DirectivesRoutingModule {}
