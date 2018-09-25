import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ViewsByTypePie } from '../charts/views-by-type-pie/views-by-type-pie.component';

@Component({
    providers: [ ViewsByTypePie ],
    selector: 'view-toggle',
    template:`
        <div [formGroup] = "radioForm" class="col-md-12 radio-container mat-elevation-z4">
            <mat-radio-group formControlName="dataFilter">
                <mat-radio-button (change)=handleRadioChange() class="radio-button" value="professional">Professional Data</mat-radio-button>
                <mat-radio-button (change)=handleRadioChange() class="radio-button" value="student">Student Data</mat-radio-button>
            </mat-radio-group>
        </div>`,
    styleUrls: ['./view-toggle.component.scss']
})
export class ViewToggle {
    @Input() 
    dataFilter: string;
    @Output()
    dataFilterChange: EventEmitter<string> = new EventEmitter<string>();
    
    radioDisabled: boolean = true;
    radioForm: FormGroup;
    
    constructor(public auth: AuthService, public pie: ViewsByTypePie) {
        if(this.auth.getIsSuperUser() === 'true') {
            this.radioDisabled = false;
        }
        this.radioForm = new FormGroup({
            dataFilter: new FormControl({value: this.auth.getDataFilter(), disabled: this.radioDisabled})
        });
    }

    handleRadioChange(event) {
        if (this.auth.getDataFilter() === 'student') {
            this.auth.setDataFilter('professional');
        } else {
            this.auth.setDataFilter('student');
        }
        this.dataFilterChange.emit(this.auth.getDataFilter());
    }
}
