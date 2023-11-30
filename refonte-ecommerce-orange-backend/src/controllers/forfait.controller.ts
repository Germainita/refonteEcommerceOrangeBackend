import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Forfait} from '../models';
import {ForfaitRepository} from '../repositories';

export class ForfaitController {
  constructor(
    @repository(ForfaitRepository)
    public forfaitRepository : ForfaitRepository,
  ) {}

  @post('/forfaits')
  @response(200, {
    description: 'Forfait model instance',
    content: {'application/json': {schema: getModelSchemaRef(Forfait)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Forfait, {
            title: 'NewForfait',
            
          }),
        },
      },
    })
    forfait: Forfait,
  ): Promise<Forfait> {
    return this.forfaitRepository.create(forfait);
  }

  @get('/forfaits/count')
  @response(200, {
    description: 'Forfait model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Forfait) where?: Where<Forfait>,
  ): Promise<Count> {
    return this.forfaitRepository.count(where);
  }

  @get('/forfaits')
  @response(200, {
    description: 'Array of Forfait model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Forfait, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Forfait) filter?: Filter<Forfait>,
  ): Promise<Forfait[]> {
    return this.forfaitRepository.find(filter);
  }

  @patch('/forfaits')
  @response(200, {
    description: 'Forfait PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Forfait, {partial: true}),
        },
      },
    })
    forfait: Forfait,
    @param.where(Forfait) where?: Where<Forfait>,
  ): Promise<Count> {
    return this.forfaitRepository.updateAll(forfait, where);
  }

  @get('/forfaits/{id}')
  @response(200, {
    description: 'Forfait model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Forfait, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: string,
    @param.filter(Forfait, {exclude: 'where'}) filter?: FilterExcludingWhere<Forfait>
  ): Promise<Forfait> {
    return this.forfaitRepository.findById(id, filter);
  }

  @patch('/forfaits/{id}')
  @response(204, {
    description: 'Forfait PATCH success',
  })
  async updateById(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Forfait, {partial: true}),
        },
      },
    })
    forfait: Forfait,
  ): Promise<void> {
    await this.forfaitRepository.updateById(id, forfait);
  }

  @put('/forfaits/{id}')
  @response(204, {
    description: 'Forfait PUT success',
  })
  async replaceById(
    @param.path.number('id') id: string,
    @requestBody() forfait: Forfait,
  ): Promise<void> {
    await this.forfaitRepository.replaceById(id, forfait);
  }

  @del('/forfaits/{id}')
  @response(204, {
    description: 'Forfait DELETE success',
  })
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.forfaitRepository.deleteById(id);
  }
}
