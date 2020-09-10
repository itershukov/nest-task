import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent, RemoveEvent,
} from 'typeorm';
import { TaskEntity } from './task.entity';

@EventSubscriber()
export class TaskSubscriber implements EntitySubscriberInterface<TaskEntity> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return TaskEntity;
  }

  beforeInsert(event: InsertEvent<TaskEntity>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }

  beforeUpdate(event: InsertEvent<TaskEntity>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }

  afterRemove(event: RemoveEvent<TaskEntity>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }
}
