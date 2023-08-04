import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeaderComponent,
        MenuComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,

    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        FooterComponent
    ],
    providers: [],
  })
  export class SharedModule { }
