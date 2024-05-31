import { Component, Input } from '@angular/core';
import { Job } from "../../models/job";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-snack-job',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './snack-job.component.html',
  styleUrl: './snack-job.component.css'
})
export class SnackJobComponent {

  @Input() job!: Job;

}
