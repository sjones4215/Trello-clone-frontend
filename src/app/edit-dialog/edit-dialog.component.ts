import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  card: Card

  constructor() { }

  ngOnInit(): void {
  }

}
