import { Component } from '@angular/core';

const todos = [
    'Изучить Джаваскрипт',
    'Изучить Ангуляр 2',
    'Написать приложение'
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Hello, World!';
    todos = todos;

}