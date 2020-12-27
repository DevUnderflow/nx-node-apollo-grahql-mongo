/**
 * Dependency Injector
 *  - Inject all the necessary components like database mondels , any external library instance.
 */
export default ({ Container, entities }: { Container; entities: { name: string; model }[] }) => {
  try {
    entities.forEach(m => {
      Container.set(m.name, m.model);
    });
    return true;
  } catch (e) {
    throw new Error(e);
  }
};
