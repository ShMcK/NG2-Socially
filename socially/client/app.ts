import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/index.ng.html',
  directives: [NgFor]
})
class Socially {
  constructor () {
    this.parties = [
      {'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.'},
      {'name': 'All dubstep all the time',
        'description': 'Get it on!'},
      {'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'}
    ];
  }
}

bootstrap(Socially);


