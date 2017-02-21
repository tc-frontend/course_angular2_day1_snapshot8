import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ProductDetailGuard } from './products/product-guard.service';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'product/:id',
            canActivate: [ ProductDetailGuard],
            component: ProductDetailComponent
        }
        ])
    ],
    exports: [ RouterModule ]
})
export class ProductRoutingModule{}