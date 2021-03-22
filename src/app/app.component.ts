import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentModule = 'Department';
  title = 'Our Organization';

  public onListItemClick(module: string): void {
    this.currentModule = module;
  }
}
