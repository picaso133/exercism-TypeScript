export class Matrix {
  rows: number[][];
  columns: number[][];

  constructor(input:string ) {
    this.rows = input
        .split("\n")
        .map((row:string) => row.split(" ").map((value) => Number(value)));

    this.columns = []
    for (let i = 0; i < this.rows.length; i++) {
      this.columns.push(this.rows.map((row:number[]) => row[i]));
    }
  }
}