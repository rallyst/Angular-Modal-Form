import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { TravelService } from './services/travel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private travelService: TravelService) {}

  ngOnInit(): void {
     
  }


  showModal() {
    const dialogData = new MatDialogConfig();
    dialogData.data = {
      title: '',
    }
    
    const dialogRef = this.dialog.open(ModalComponent, dialogData);
    dialogRef.updateSize('940px','643px');
    dialogRef.afterClosed().subscribe();
  }
}
