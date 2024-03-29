import { Data } from "./data.module.js";
import { Box } from "./box.module.js";

export class Ingredients {
  constructor() {
    this.data = new Data();
    this.box = new Box();
    this.ingredients();
  }
  ingredients() {
    document
      .getElementById("ingredients")
      .addEventListener("click", async () => {
        document.getElementById("instructions").classList.add("d-none");
        document.getElementById("homePage").classList.remove("d-none");
        let api = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
        document.querySelector(".loading").classList.remove("d-none");
        let arry = await this.data.gitData(api);
        this.box.ingredientsBox(arry);
      });
  }
  ingredientData() {
    document.querySelectorAll(".ingredient").forEach((ingredient) => {
      ingredient.addEventListener("click", () => {
        let api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.dataset.ingredient}`;
        document.querySelector(".loading").classList.remove("d-none");
        this.sendApi(api);
      });
    });
  }
  async sendApi(api) {
    let arrymore = await this.data.gitData(api);
    let arry = arrymore.slice(0, 20);
    let showBox = this.box.dataBox(arry);
    this.data.showData(showBox);
  }
}
