import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-params',
  templateUrl: './page-params.component.html',
  styleUrl: './page-params.component.css'
})
export class PageParamsComponent implements OnInit {

  message: string = "No message defined.";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() : void {
    this.message = this.route.snapshot.params['message'];
  }

}
