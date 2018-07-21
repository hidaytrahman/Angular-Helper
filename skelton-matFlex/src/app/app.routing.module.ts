import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const ROUTES: Routes = [
    { path : 'index', component: IndexComponent},
    { path : '', redirectTo: 'index', pathMatch: 'full'}
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        CommonModule,
        RouterModule
    ]
})

export class RoutingModule {
    
}