import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-video-recording',
  standalone: true,
  imports: [],
  templateUrl: './video-recording.component.html',
  styleUrl: './video-recording.component.css'
})


export class VideoRecordingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
