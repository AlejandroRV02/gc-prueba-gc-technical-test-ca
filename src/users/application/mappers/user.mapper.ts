export class UserMapper {

  static mapEntityToModel<E extends Record<string, any>, M extends Record<string, any>>(entity: E): M {
    const model = {} as M;

    for (const key in entity) {
      if (entity.hasOwnProperty(key)) {
        model[key as keyof M] = entity[key as keyof E] as unknown as M[keyof M];
      }
    }

    return model;
  }
}