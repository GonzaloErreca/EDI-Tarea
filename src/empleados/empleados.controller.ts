import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadoModel } from './empleadoModel';

@Controller("empleados")
export class EmpleadosController {
    constructor(private readonly service: EmpleadosService) {}

@Get()
getEmpleados(){
    return this.service.getEmpleados();
}
@Get(":id")
getEmpleado(@Param("id") id: number){
return this.service.getEmpleado(id);
}

@Post()
addEmpleado(@Body()empleado:EmpleadoModel){
    return this.service.addEmpleado(empleado)
}
@Put(":id")
modifySalary(@Body() modelo : EmpleadoModel, @Param("id") id : number){
    return this.service.modifySalary(id,modelo)
}
@Delete(":id")
deleteEmpleado(@Param("id") id : number){
    return this.service.deleteEmpleado(id)
}
}
