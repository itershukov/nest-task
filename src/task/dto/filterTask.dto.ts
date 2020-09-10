import {ApiPropertyOptional} from "@nestjs/swagger";
import {IsEnum, IsInt, IsOptional, Max, Min} from "class-validator";
import {Type} from "class-transformer";
import {ETaskOrder} from "../task.types";

export class FilterTaskDto {
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiPropertyOptional()
  offset?: number = 0;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  @ApiPropertyOptional()
  limit?: number = 10;

  @IsOptional()
  @IsEnum(ETaskOrder)
  @ApiPropertyOptional({ type: "enum", enum: ETaskOrder  })
  readonly sort: ETaskOrder = ETaskOrder.Order;
}
