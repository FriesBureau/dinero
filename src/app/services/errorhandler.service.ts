import { ErrorHandler, Inject, Injector, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(@Inject(Injector) private injector: Injector) {
    super();
  }

  // Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }

  public override handleError(error: any): void {
    this.toastrService.error(
      "An unexpected error has occurred.",
      "Error",
      {
        closeButton: true,
        timeOut: 1000,
        onActivateTick: true
      }
    );

    super.handleError(error);
  }
}