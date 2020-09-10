import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {TaskRepository} from "./task.repository";
import {CreateTaskDto} from "./dto/createTask.dto";
import {FilterTaskDto} from "./dto/filterTask.dto";

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(data: CreateTaskDto){
    try {
      const task = this.taskRepository.create(data);
      await this.taskRepository.save(task);
      return task
    } catch (e){
      if (e.constraint === "UQ_bd16562cab77cc90013e569b85b"){
        throw new ConflictException({
          statusCode: 409,
          message: 'Task with this the same order vale already exist'
        })
      }
      throw e;
    }
  }

  async get(id: number){
    const task = await this.taskRepository.findOne({id});
    if (!task){
      throw new NotFoundException({
        statusCode: 404,
        message: 'Not found'
      });
    }
    return task;
  }

  async update(id: number, data: CreateTaskDto){
    const task = await this.get(id);
    const updatedTask = await this.taskRepository.merge(task, data);
    await this.taskRepository.save(updatedTask);
    return updatedTask;
  }

  async delete(id: number){
    const task = await this.get(id);

    return this.taskRepository.remove(task);
  }

  async getAll(filter: FilterTaskDto){

    return this.taskRepository.findAll(filter);
  }
}
