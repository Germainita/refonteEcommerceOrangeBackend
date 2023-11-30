import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbBoutiqueDataSource} from '../datasources';
import {Forfait, ForfaitRelations} from '../models';

export class ForfaitRepository extends DefaultCrudRepository<
  Forfait,
  typeof Forfait.prototype.id,
  ForfaitRelations
> {
  constructor(
    @inject('datasources.dbBoutique') dataSource: DbBoutiqueDataSource,
  ) {
    super(Forfait, dataSource);
  }
}
