import { NgModule } from '@angular/core';
import { UserService } from '../user/services/user.service';


@NgModule({
  providers: [UserService]
})
export class CoreModule { }
