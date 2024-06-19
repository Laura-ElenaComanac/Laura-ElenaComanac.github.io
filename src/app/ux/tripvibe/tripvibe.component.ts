import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tripvibe',
    templateUrl: './tripvibe.component.html',
    styleUrl: './tripvibe.component.css'
})
export class TripvibeComponent implements OnInit{

    ngOnInit(): void {
        window.scroll(0, 0);
    }
}
