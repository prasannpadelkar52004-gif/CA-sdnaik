import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // ✅ only this

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink], // ✅ FIXED
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer implements OnInit, OnDestroy {

  intervalId: any;

  // 🔥 ADD THIS HERE
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}

  numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

  positions = this.numbers.map((num) => {
    const angle = (num - 3) * (Math.PI * 2) / 12;
    const radius = 42;

    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle)
    };
  });

  clocks = [
    { label: 'India', tz: 'Asia/Kolkata', hour:'', minute:'', second:'', time:'' },
    { label: 'USA', tz: 'America/New_York', hour:'', minute:'', second:'', time:'' },
    { label: 'UK', tz: 'Europe/London', hour:'', minute:'', second:'', time:'' },
    { label: 'UAE', tz: 'Asia/Dubai', hour:'', minute:'', second:'', time:'' },
    { label: 'Canada', tz: 'America/Toronto', hour:'', minute:'', second:'', time:'' }
  ];

ngOnInit() {
  this.ngZone.runOutsideAngular(() => {

this.intervalId = setInterval(() => {

  this.ngZone.run(() => {
    this.updateClocks();

    this.cd.markForCheck(); 
  });

}, 1000);

  });
}

updateClocks() {
  const systemNow = new Date();

  this.clocks.forEach(c => {

    const tzNow = new Date(
      systemNow.toLocaleString("en-US", { timeZone: c.tz })
    );

    const sec = tzNow.getSeconds();
    const min = tzNow.getMinutes() + sec / 60;
    const hr  = (tzNow.getHours() % 12) + min / 60;

    c.second = `translate(-50%, -100%) rotate(${sec * 6}deg)`;
    c.minute = `translate(-50%, -100%) rotate(${min * 6}deg)`;
    c.hour   = `translate(-50%, -100%) rotate(${hr * 30}deg)`;

    c.time = tzNow.toLocaleTimeString();
  });
}

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
} 