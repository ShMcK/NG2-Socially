import {Component, View, Inject} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators} from 'angular2/angular2';
import {PartyService} from 'client/lib/party-service';

@Component({
  selector: 'parties-form',
  viewInjector: [PartyService]
})
@View({
  templateUrl: "client/parties-form/parties-form.ng.html",
  directives: [formDirectives]
})
export class PartiesForm {
  partiesForm:ControlGroup<IParty>;
  partyService:PartyService;

  constructor(@Inject(PartyService) partyService:PartyService) {
    this.partyService = partyService;
    this.partiesForm = new ControlGroup({
      name: new Control('', Validators.required),
      description: new Control('', Validators.required),
      isPublic: new Control(false)
    });
  }

  add() {

    // validate if the form is valid
    if (this.partiesForm.valid) {

      this.partyService.add(this.partiesForm.value);

      //reset input values to empty strings
      this.partiesForm.controls.name.updateValue('');
      this.partiesForm.controls.description.updateValue('');
    }
  }
}