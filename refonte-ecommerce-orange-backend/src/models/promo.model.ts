import {Entity, model, property} from '@loopback/repository';

@model()
export class Promo extends Entity {
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
    type: 'date',
    required: true,
  })
  dateDebut: string;

  @property({
    type: 'date',
    required: true,
  })
  dateFin: string;

  @property({
    type: 'string',
  })
  image?: string;

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


  constructor(data?: Partial<Promo>) {
    super(data);
  }
}

export interface PromoRelations {
  // describe navigational properties here
}

export type PromoWithRelations = Promo & PromoRelations;
