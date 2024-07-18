export class Customer {
  
  constructor(
    public id: string,
    public name: string,
    public lastname: string,
    public birthday: Date,
    public age?: number
  ) {}
}
