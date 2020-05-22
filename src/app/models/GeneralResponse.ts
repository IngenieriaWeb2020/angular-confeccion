import { Maquina } from "./Maquina";

export class GeneralResponse {
    auth: boolean;
    maquinasNuevas: Maquina[];
    maquinasSegunda: Maquina[];
    msg: string;
    errmsg: string;
}