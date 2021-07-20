import { Component } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent  {

  closeModal!: string;
  c=1;
  filename!:string;
  onlineurl!:string;
  constructor(private modalService: NgbModal) {
  }
    
  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  Upload(alert:any,content:any)
  {
    console.log(this.filename.valueOf());
  //   if(this.filename.length==0 && this.onlineurl.length==0)
  //   {
  //  this.modalService.open(alert,{ariaLabelledBy:'1'}).result;
  // }
  // else if(this.filename.length!=0 && this.onlineurl.length!=0)
  // {
  //   this.modalService.open(alert,{ariaLabelledBy:'2'}).result;
  // }
  // else
  // {
  //   this.modalService.dismissAll(content);
  // }
}
}
