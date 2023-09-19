import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { dataPage } from "../../component/data";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent {
  @Input()
  contantphoto: string = "f";
  @Input()
  contantTitle: string = "";
  @Input()
  contantDescription: string = "";
  private id: string | null = "0";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get("id")));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataPage.filter((article) => article.id == id)[0];

    if (!result) {
      this.contantTitle = result.title;
      this.contantphoto = result.photoCover;
      this.contantDescription = result.description;
    }
  }
}
