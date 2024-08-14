import { Component, OnInit, signal } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrl: './admin-container.component.scss'
})
export class AdminContainerComponent implements OnInit {
userList = signal<any>([])
  constructor(private service:AdminService){}

  ngOnInit(): void {
    this.service.getallUser().subscribe((res:any) => {
      console.log("res-------", res)
      this.userList.set(res)
    })
  }

}
