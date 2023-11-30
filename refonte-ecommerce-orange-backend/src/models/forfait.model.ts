import {Entity, model, property} from '@loopback/repository';

@model()
export class Forfait extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  libelle: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'string',
  })
  updatedAt?: string;

  @property({
    type: 'string',
  })
  updatedBy?: string;

  constructor(data?: Partial<Forfait>) {
    super(data);
  }
}

export interface ForfaitRelations {
  // describe navigational properties here
}

export type ForfaitWithRelations = Forfait & ForfaitRelations;
