import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tododetail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tododetail.component.html",
  styleUrls: ["./tododetail.component.scss"],
})
export class TododetailComponent {
  @Input() detail!: any;

  constructor() {}
}
