import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {GetTaskDto} from "./dto/getTask.dto";
import {CreateTaskDto} from "./dto/createTask.dto";
import {TaskService} from "./task.service";
import {FilterTaskDto} from "./dto/filterTask.dto";

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  @Get()
  getList(@Query() filter: FilterTaskDto): Promise<GetTaskDto[]> {
    return this.taskService.getAll(filter);
  }

  @Post()
  create(@Body() taskDto: CreateTaskDto): Promise<GetTaskDto> {
    return this.taskService.create(taskDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<GetTaskDto> {
    return this.taskService.get(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() taskDto: CreateTaskDto): Promise<GetTaskDto> {
    return this.taskService.update(id, taskDto) ;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.delete(id);
  }
}
