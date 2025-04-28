import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NabvarComponent } from './nabvar/nabvar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NabvarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-DP';
}
