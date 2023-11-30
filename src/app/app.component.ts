import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'rolling-eyes-app';

    ngOnInit(): void {
        const a = 123;
        // const multiple = 123;
        const aApplee = 'aaa';
        console.log('a', a);
        console.log('a', aApplee);
    }
}
