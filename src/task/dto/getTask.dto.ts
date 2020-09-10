import {ApiProperty} from "@nestjs/swagger";
import {CreateTaskDto} from "./createTask.dto";

export class GetTaskDto extends CreateTaskDto{
  @ApiProperty({type: 'number'})
  readonly id: number;
}
