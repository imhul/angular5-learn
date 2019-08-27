import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

// Services
import { NotifyService } from '../services/notify/notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'],
})
export class NotifyComponent implements OnDestroy {

    public subscription: Subscription;
  
    constructor(private notify: NotifyService, private snack: MatSnackBar) {
      this.subscription = this.notify.getMessage().subscribe((message: string) => {
        this.openSnackBar(message, 'Dismiss');
      })
    }

    openSnackBar(message: string, action: string) {
      this.snack.open(message, action, {
        duration: 3000,
      })
    }
  
    ngOnDestroy() {
      this.notify.destroy();
      this.subscription.unsubscribe();
    }
  }
  
