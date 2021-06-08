import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  resultOperation: any;
  operationForm: FormGroup;

  constructor(private operationService: OperationsService) { 
    this.operationForm = this.createForm();
  }

  ngOnInit(): void {
  }

  getASum() {
    this.operationService.getASum(this.operationForm.value).subscribe(res => {
      this.getAProduct(res);
    });
  }

  getAProduct(a) {
    this.operationService.getAProduct(a).subscribe(res => {
      this.getAPower(res);
    });
  }

  getAPower(a) {
    this.operationService.getAPower(a).subscribe(res => {
      this.resultOperation = res[0].result;
    });
  }

  createForm() {
    return new FormGroup ({
      _id: new FormControl({value: "", disabled: true}),
      number1: new FormControl(""),
      number2: new FormControl("")
    });
  }
}
