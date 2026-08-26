import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pgrs-pdf',
  imports: [],
  templateUrl: './pgrs-pdf.html',
  styleUrl: './pgrs-pdf.css',
})
export class PgrsPdf implements OnInit{

  constructor(private route: ActivatedRoute){
    console.log('teste')
  }

  ngOnInit(): void {
    console.log('teste')
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id')
      console.log(id)
    })
  }

}
