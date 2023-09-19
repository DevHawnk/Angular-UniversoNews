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
  contantphoto: string =
    "https://media.tenor.com/39hlFuVYE8IAAAAd/gear-5-gear-5-luffy.gif";
  @Input()
  contantTitle: string = "Luffy maceta Kaido";
  @Input()
  contantDescription: string =
    "Kaido, após derrubar Luffy várias vezes, não imaginava que, naquela última vez, após a intervenção de um membro da CP9, ele mataria Luffy. Ele só não contava com o despertar do Luffy.  Luffy, após a pancada de Kaido, se encontrava caído no chão, até o momento em que começou a se escutar um som que a criatura mais velha do mundo não escutava há 800 anos: os tambores da liberdade.<br>  Sim, ali estava iniciando o despertar da Akuma no Mi de Luffy. <br>  Aquele som era conhecido como os tambores da liberdade. <br>  Ali estava Luffy, retornando dos mortos, com um sorriso e uma força incontrolável. <br>  Nem Kaido acreditava, mas se empolgava por saber que teria uma luta que não tinha há muito tempo.  Só não esperava que a fruta do Luffy, na verdade, não era uma fruta comum, mas sim a fruta de Joy Boy, a fruta mítica do Deus Nika.Uma luta sem precedentes.";
  private id: string | null = "0";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get("id")));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataPage.filter((article) => article.id == id);

    if (!result) {
      this.contantTitle = result.title;
    }
  }
}
