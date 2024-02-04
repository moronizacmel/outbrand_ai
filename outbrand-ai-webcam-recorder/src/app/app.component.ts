import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoRecordingComponent } from './video-recording/video-recording.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoRecordingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'outbrand-ai-webcam-recorder';
}
