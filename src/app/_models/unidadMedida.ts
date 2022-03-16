export class UnidadMedida{
    private idUnidadMedida: number = 0;
    private descripcionUnidadMedida: string;

    public get IdUnidadMedida(): number{
        return this.idUnidadMedida;
    }
    
    public get DescripcionUnidadMedida() : string {
        return this.descripcionUnidadMedida;
    }
    
    public set DescripcionUnidadMedida(v : string) {
        this.descripcionUnidadMedida = v;
    }
    
    public set IdUnidadMedida(v : number) {
        this.idUnidadMedida = v;
    }
    
}