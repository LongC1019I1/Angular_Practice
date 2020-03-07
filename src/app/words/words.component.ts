import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  newEn;
  newVN;
  fillter = 'Show_All';
  showForm = false;
  arrWords = [
    {id: 1, en: 'action', vn: 'hành động', memorized: true},
    {id: 2, en: 'actor', vn: 'diễn viên', memorized: false},
    {id: 3, en: 'activity', vn: 'hoạt động', memorized: true},
    {id: 4, en: 'active', vn: 'chủ động', memorized: true},
    {id: 5, en: 'bath', vn: 'tắm', memorized: false},
    {id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true}
  ];

  constructor() {
  }

getShowStatus(memoried: boolean) {
    const dkShowAll = this.fillter === 'Show_All';
    const dkMemoried = this.fillter === 'Memoried' && memoried;
    const dkNotMemory = this.fillter === 'Not_Memory' && !memoried;
    return dkShowAll || dkMemoried || dkNotMemory;
}
  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length,
      en: this.newEn,
      vn: this.newVN,
      memorized: false
    });
    this.newVN = ' ';
    this.newEn = ' ';
    this.showForm = false;
  }

  ngOnInit(): void {
  }

  removeWord(id: number) {
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }
}
