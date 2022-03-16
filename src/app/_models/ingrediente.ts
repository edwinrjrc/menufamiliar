export class Ingrediente{
    idIngrediente: number;
    descripcionIngrediente: string;
    
    public get IdIngrediente() : number {
        return this.idIngrediente;
    }
    
    public get DescripcionIngrediente() : string {
        return this.descripcionIngrediente;
    }
    
    public set IdIngrediente(v : number) {
        this.idIngrediente= v;
    }
    
    public set DescripcionIngrediente(v : string) {
        this.descripcionIngrediente = v;
    }
    
}