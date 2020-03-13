import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { Dashboard } from 'src/app/dashboard/dashboard.component';
import { Booktable } from 'src/app/components/booktable/booktable.component';
import { History } from 'src/app/history/history.component';
import { Reserve } from 'src/app/reserve/reserve.component';

const routes: Routes = [
    {path: 'dashboard', component: Dashboard},
    {path: '', component: Booktable},
    {path: 'history', component: History},
    {path: 'reserve', component:Reserve}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
