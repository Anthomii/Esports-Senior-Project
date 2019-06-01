import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  test_string = "test";

  private participant_list = new BehaviorSubject<string[]>([]);
  private selected_user = new BehaviorSubject<string>("default selected user");
  private selected_pro = new BehaviorSubject<string>("default selected pro player");

  constructor() { }

  getParticipantList() {
    return this.participant_list.asObservable();
  }

  setParticipantList(part_list : string[]) {
    this.participant_list.next(part_list);
  }

  getSelectedUser() {
    return this.selected_user.asObservable();
  }

  setSelectedUser(user : string){
    this.selected_user.next(user);
  }

  getSelectedPro() {
    return this.selected_pro.asObservable();
  }

  setSelectedPro(pro : string) {
    this.selected_pro.next(pro);
  }

}
