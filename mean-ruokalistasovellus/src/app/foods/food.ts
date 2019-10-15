export class Food {
    id: string;
    name: string;

    public getId() {
      return this.id;
    }
    public setId(foodId: string) {
      this.id = foodId;
    }

    public getName() {
      return this.name;
    }
    public setName(foodName: string) {
      this.name = foodName;
    }
}
