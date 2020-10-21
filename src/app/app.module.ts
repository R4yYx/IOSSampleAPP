import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {RouteReuseStrategy} from "@angular/router";
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {WebView} from "@ionic-native/ionic-webview/ngx";
import {FilePath} from "@ionic-native/file-path/ngx";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
  ],
  providers: [
    StatusBar,
    FilePath,
    WebView,
    Camera,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
