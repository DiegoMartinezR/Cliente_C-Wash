export  interface  PlanAnual
{
    id_planContable?:number;        
    detalle?:string;
    fecha?:Date;
    codigo?:number;
    haber?:number;
    deber?:number;
    estado?:number;
    id_nivel?:number;
    descripcion?:string;
    nivel?:number;
    padre_nivel?:number;

}