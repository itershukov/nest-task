import {EntityRepository, Repository} from "typeorm";
import {TaskEntity} from "./task.entity";
import {FilterTaskDto} from "./dto/filterTask.dto";
import {ETaskOrder} from "./task.types";

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  public async findAll( filter: FilterTaskDto): Promise<TaskEntity[]> {
    const qb = this.createQueryBuilder('tasks');

    if (filter.sort === ETaskOrder.Order) {
      qb.orderBy('zones.order', 'ASC')
    } else {
      qb.orderBy('RANDOM()')
    }

    return qb.limit(filter.limit).offset(filter.offset).getMany();
  }
}
