import {Entity, model, property} from '@loopback/repository';

@model()
export class Newsletter extends Entity {
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
  email: string;

  @property({
    type: 'date',
    required: true,
  })
  dateInscription: string;


  constructor(data?: Partial<Newsletter>) {
    super(data);
  }
}

export interface NewsletterRelations {
  // describe navigational properties here
}

export type NewsletterWithRelations = Newsletter & NewsletterRelations;
