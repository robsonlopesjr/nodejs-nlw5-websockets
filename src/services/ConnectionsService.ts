import { getCustomRepository, Repository } from "typeorm";

import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionsCreate {
  admin_id?: string;
  user_id: string;
  socket_id: string;
  id?: string;
}

class ConnectionsService {
  private connectionsRepository: Repository<Connection>;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ admin_id, user_id, socket_id, id }: IConnectionsCreate) {
    const connection = this.connectionsRepository.create({
      admin_id,
      user_id,
      socket_id,
      id
    });

    await this.connectionsRepository.save(connection);

    return connection;
  }
}

export { ConnectionsService }