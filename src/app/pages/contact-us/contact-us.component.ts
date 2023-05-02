import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements AfterViewInit {

  currentName: string = '';
  levelName: string = '';

  result: any;

  questions: any[] = [];

  finalAnswers: any[] = [];

  answersForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _CategoriesService: CategoriesService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private render: Renderer2,
  ) {
    _ActivatedRoute.params.subscribe((res) => {
      this.currentName = res['name'];
      console.log(this.currentName);
      this.levelName = res['quName'];
      console.log(this.levelName);
    });

    this.answersForm = this.fb.group({
      answers: this.fb.array([]),
    });
  }

  get answers(): FormArray {
    return this.answersForm.get("answers") as FormArray
  }

  newAnswer(question: string, id: any, values: string[]) {
    (this.answersForm.controls['answers'] as FormArray).push(this.fb.group({
      id: new FormControl(id),
      question: new FormControl(question),
      answer: new FormControl(null),
      values: new FormControl(values)
    }))

    console.log(this.answersForm.controls['answers']);

  }

  getQuestions() {
    if (this.levelName == 'test') {
      this._CategoriesService
        .getTestQuestions(this.currentName)
        .subscribe((res) => {

          this.questions = res;
          this.questions.forEach(element => {
            this.newAnswer(element.E_Q, element.E_ID, element.Exam_choice)
          });

          console.log(res);
        });
    }
    else {
      this._CategoriesService
        .getQuestions(this.currentName, this.levelName)
        .subscribe((res) => {
          if (res.message == 'faild') {
            console.log('Your level is ' + res.date);
          }
          else {
            this.questions = res;
            console.log(this.questions)
            this.questions.forEach(element => {
              this.newAnswer(element.Quction.L_Q, element.Q_ID, element.Quction.Q_choice)
            });
          }

          // console.log(res);


        });
    }

  }

  onSubmit() {
    for (let i = 0; i < this.answers.length; i++) {
      this.finalAnswers.push(this.answers.value[i].answer)
    }
    console.log(this.finalAnswers);

    this._CategoriesService.getResults(this.currentName, this.levelName, this.finalAnswers).subscribe((res) => {

      // this.result = res;
      console.log(res);

      this.finalAnswers = [];
      console.log(this.finalAnswers);



      // this._Router.navigate([`levels/${this.currentName}/result/${this.levelName}`, this.result])
    })

    // if (this.levelName == 'test') {
    //   this._CategoriesService.getTestResult(this.currentName, this.finalAnswers).subscribe((res)=>{

    //     console.log(res);

    //     this.result = res;
    //     console.log(this.result);


    //   })
    // }
    // else{
    //   this._CategoriesService.getResults(this.currentName, this.levelName, this.finalAnswers).subscribe((res)=>{

    //     this.result = res;
    //     console.log(this.result);

    //     this.finalAnswers = [];
    //     console.log(this.finalAnswers);



    //   })
    // }
  }


  ngOnInit(): void {
    this.getQuestions();
  }

  // ------------------------------

  ngAfterViewInit(): void {
    this.mainJSActivator();

  }

  mainJSActivator() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/main.js';
    revScript.id = "MAIN_JS";
    this.render.appendChild(document.body, revScript);
  }

  ngOnDestroy(): void {
    document.getElementById('MAIN_JS')?.remove();
  }
}
