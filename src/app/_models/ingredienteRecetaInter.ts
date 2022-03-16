import { IngredienteInter } from "./ingredienteInter";
import { UnidadMedidaInter } from "./unidadMedidaInter";

export interface IngredienteRecetaInter{
    cantidad: number;
    ingrediente: IngredienteInter;
    unidadMedida: UnidadMedidaInter;
}