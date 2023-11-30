import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbBoutiqueDataSource} from '../datasources';
import {Commande, CommandeRelations} from '../models';

export class CommandeRepository extends DefaultCrudRepository<
  Commande,
  typeof Commande.prototype.id,
  CommandeRelations
> {
  constructor(
    @inject('datasources.dbBoutique') dataSource: DbBoutiqueDataSource,
  ) {
    super(Commande, dataSource);
  }
}
