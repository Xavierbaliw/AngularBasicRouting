import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
import {error} from "@angular/compiler-cli/src/transformers/util";


platformBrowserDynamic().bootstrapModule(AppModule)
.catch(error=>console.error(error));
