import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createCustomer = container.resolve(CreateCustomerService);

    const { name, email } = request.body;

    const customer = createCustomer.execute({ name, email });

    return response.json(customer);
  }
}
