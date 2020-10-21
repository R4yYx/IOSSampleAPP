import {BehaviorSubject} from "rxjs";
import {Component, OnInit} from "@angular/core";
import {Platform} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {PictureSourceType} from "@ionic-native/camera/ngx";
import {Camera} from '@ionic-native/camera/ngx';
import {FilePath} from "@ionic-native/file-path/ngx";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  [x: string]: any;

  image$ = new BehaviorSubject(null);

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private camera: Camera,
    private filePath: FilePath
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }



  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 300,
      targetWidth: 300,
    }

    if(this.platform.is('cordova')){
      this.camera.getPicture(options).then(async (path) => {
        //let filePath = await this.filePath.resolveNativePath(path);
        this.image$.next(path);
      }, (err) => {
        // Handle error
        console.log("Camera issue:" + err);
      });
    }
  }
}
