import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProgramService} from "./services/program.service";
import UserDTO from "../auth/dto/UserDTO";
import ProgramDTO from "./dto/ProgramDTO";

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  constructor(private programService: ProgramService) { }

  ngOnInit(): void {
  }

  createForm = new FormGroup({
    pid: new FormControl('', [Validators.pattern('(P)[0-9]{3}'), Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
  });

  updateForm = new FormGroup({
    pid: new FormControl('', [Validators.pattern('(P)[0-9]{3}'), Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
  });


  saveProgram(){

    this.programService.saveProgram(
      new ProgramDTO(
        this.createForm.get('pid')?.value.toString().trim(),
        this.createForm.get('name')?.value.toString().trim(),
        this.createForm.get('description')?.value.toString().trim(),
        this.createForm.get('start_date')?.value,
        this.createForm.get('end_date')?.value
      )
    ).subscribe(response => {

      console.log(response);

    }, error => {
      console.log(error);
    })

  }

  updateProgram(){

    this.programService.updateProgram(
      new ProgramDTO(
        this.updateForm.get('pid')?.value.toString().trim(),
        this.updateForm.get('name')?.value.toString().trim(),
        this.updateForm.get('description')?.value.toString().trim(),
        this.updateForm.get('start_date')?.value,
        this.updateForm.get('end_date')?.value
      )
    ).subscribe(response => {

      console.log(response);

    }, error => {
      console.log(error);
    })

  }

}
