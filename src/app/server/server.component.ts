import { Component } from '@angular/core';

@Component(
    {
        selector: 'app-server',
        templateUrl: './server.component.html',
        styles: [`
            p {color: red;}
        `]
    }
)

export class ServerComponent {
    server = 'I am a server';
}
