import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, children: [
        {
            path: '',
            component: LoginComponent,
        },
        {
            path: 'logout',
            component: LoginComponent,
        },
    ]},
    {path: 'todo', component: TodoComponent},
    {path: 'home', component: HomeComponent}
];
