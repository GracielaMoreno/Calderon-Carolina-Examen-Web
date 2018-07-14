import {Injectable} from "@nestjs/common";
import { PacienteEntity } from './paciente.entity';
import { getConnection } from 'typeorm';

@Injectable()
export class PacienteService {

    arregloPacientes: Paciente[] = [];

    crearPaciente(pacientes: Paciente): Paciente[] {
        this.arregloPacientes.push(pacientes);
        return this.arregloPacientes;
    }

    obtenerUno(id){

        return this.arregloPacientes[id];
    }

  async listartodo(response){
    let conex= await getConnection().getRepository(PacienteEntity).find();
    let conex2= await getConnection().getRepository(PacienteEntity).find( { relations: ["pacienteId"] });
    let idTomado;
   conex2.map(dato=>{
     idTomado=dato.pacienteId
   });
    conex.map(data=>
      {
        console.log(data.pacienteId);
        console.log();
        this.crearPaciente(new Paciente(data.id, data.nombre, data.apellido,
          data.edad, data.fecha, data.hijos, data.tieneSeguro, data.urlPaciente, idTomado));
      },
    );
    return  response.send(this.arregloPacientes);
  }

    editarUno(id, nombre, apellido, fecha, hijos, seguro){
        let arregloU=this.obtenerUno(id);
        arregloU.nombre=nombre,
            arregloU.apellido=fecha,
            arregloU.fecha=fecha,
            arregloU.hijos=hijos,
            arregloU.tieneSeguro=seguro;
        return arregloU;
    };


}
export class Paciente {


    constructor(
        public id: number,
        public nombre:string,
        public apellido:string,
        public edad:number,
        public fecha: string,
        public hijos: number,
        public tieneSeguro: any,
        public urlPaciente: string,
        public pacienteId: number


    ){



    }}