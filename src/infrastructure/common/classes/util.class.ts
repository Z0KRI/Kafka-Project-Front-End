import { IHeaders } from "@/common/interfaces";
import { Router } from "vue-router";
import { Observable, throwError } from "rxjs";

export class UtilClass {
  constructor(private router: Router) {}

  public params(queryParams: any) {
    const params = new URLSearchParams({
      ...this.router.currentRoute.value.query,
      ...queryParams,
    } as Record<string, string>).toString();
    return params;
  }

  public headers(): IHeaders {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  public Errors(): Observable<never> {
    return throwError(() => new Error("Error en la aplicación"));
  }
}
