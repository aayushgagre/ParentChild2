import {Component,Input} from '@angular/core';

@Component({
    selector:'show-emp',
    templateUrl:'app.show.html'
})

export class ShowEmployee{
    @Input()
    inchild:any[];
}
