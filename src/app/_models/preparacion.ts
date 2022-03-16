export class Preparacion{
    nroPaso:number;
    descripcionPaso:string;
    tiempo:number;

    public get NroPaso() : number {
        return this.nroPaso;
    }
    
    public set NroPaso(v : number) {
        this.nroPaso = v;
    }
    
    public get DescripcionPaso() : string {
        return this.descripcionPaso;
    }
    
    public set DescripcionPaso(v : string) {
        this.descripcionPaso = v;
    }
    
    public get Tiempo() : number {
        return this.tiempo;
    }
    
    public set Tiempo(v : number) {
        this.tiempo = v;
    }
    
}