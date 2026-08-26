import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  
  constructor(private router: Router){
  }
  
  ngOnInit(): void {
    
  }
  toRoute(route:string){
    console.log(route)
    this.router.navigateByUrl(route);    
  }
}
