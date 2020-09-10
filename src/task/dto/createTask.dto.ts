import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, MaxLength, Min, MinLength} from "class-validator";

export class CreateTaskDto {
  @IsNumber()
  @Min(1)
  @ApiProperty({type: 'number', minimum: 1})
  readonly order: number;

  @IsString()
  @MinLength(1)
  @MaxLength(500)
  @ApiProperty({ minLength: 1, maxLength: 500 })
  readonly title: string;
}
