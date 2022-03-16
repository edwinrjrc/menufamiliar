import { Ingrediente } from "./ingrediente";
import { UnidadMedida } from "./unidadMedida";

export class IngredienteReceta {
    private cantidad: number;
    private unidadMedida: UnidadMedida ;
    private ingrediente: Ingrediente;

    public get UnidadMedida():UnidadMedida{
        return this.unidadMedida;
    }
    
    public get Cantidad() : number {
        return this.cantidad;
    }
    
    public get Ingrediente() : Ingrediente {
        return this.ingrediente;
    }
    
    public set UnidadMedida(v : UnidadMedida) {
        this.unidadMedida = v;
    }

    
    public set Ingrediente(v : Ingrediente) {
        this.ingrediente = v;
    }
    
    public set Cantidad(v : number) {
        this.cantidad = v;
    }
    
}