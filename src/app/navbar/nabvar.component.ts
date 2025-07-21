import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  imports: [RouterLink],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  isDarkMode = false;

  onToggleTheme(){
    this.isDarkMode = !this.isDarkMode;

    if(this.isDarkMode){
      document.body.classList.add('modo-oscuro')
    }else{
      document.body.classList.remove('modo-oscuro')
    }
  }
}
