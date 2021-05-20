import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-rental-list-items',
  templateUrl: './rental-list-items.component.html',
  styleUrls: ['./rental-list-items.component.scss']
})
export class RentalListItemsComponent implements OnInit {
@Input() currentrental:any

  constructor() { }

  ngOnInit(): void {
  }

}
