import { Injectable } from '@nestjs/common';
import { EmpleadoModel } from './empleadoModel';

@Injectable()
export class EmpleadosService {
  empleados = [];

  constructor() {
    let empleado = {
      id: 1,
      name: 'Juan Rodriguez',
      tel: '2494685544',
      salary: '300000',
    };
    this.empleados.push(empleado);

    empleado = {
      id: 2,
      name: 'Juan Perez',
      tel: '2314586955',
      salary: '20000',
    };
    this.empleados.push(empleado);

    empleado = {
      id: 3,
      name: 'Gonzalo Sanchez',
      tel: '2281665986',
      salary: '250000',
    };
    this.empleados.push(empleado);
  }
  getEmpleados() {
    return this.empleados;
  }

  getEmpleado(id: number) {
    for (let empleado of this.empleados) {
      if (empleado.id == id) {
        return empleado;
      }
    }
    return 'Empleado no encontrado.';
  }

  addEmpleado(empleadomodel: EmpleadoModel) {
    let empleado = {
      id: empleadomodel.id,
      name: empleadomodel.name,
      tel: empleadomodel.tel,
      salary: empleadomodel.salary,
    };
    this.empleados.push(empleado);
    return 'modificacion realizada con exito';
  }

  modifySalary(id: number, modelo: EmpleadoModel) {
    let empleado = null;
    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].id == id) {
        this.empleados[i].salary = modelo.salary;
        return 'El salario fue modificado';
      }
    }
    return 'el empleado no existe';
  }

  deleteEmpleado(id) {
    if (id > 0 && id < this.empleados.length) {
      this.empleados.splice(id - 1, 1);
      return this.empleados;
    } else {
      return 'El empleado no existe';
    }
  }
}
