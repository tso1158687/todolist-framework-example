import { Routes } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';

export const routes: Routes = [
    {
        path: '',
        component:WelcomeComponent
    },
    {
        path: 'todo',
        loadComponent: () => import('./component/todo/todo.component').then((m) => m.TodoComponent),
    },
    {
        path:'list',
        loadComponent:()=>import('./component/list/list.component').then((m)=>m.ListComponent)
    },
    {
        path: '**',
        redirectTo: '',
    }
];
