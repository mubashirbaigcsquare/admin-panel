import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
        path: '', 
        loadChildren: './home/home.module#HomeModule' 
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'terminals', loadChildren: './terminals/terminals.module#TerminalsModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}