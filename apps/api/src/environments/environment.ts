export const environment = {
  __pord__: process.env.NODE_ENV === 'production',
  port: process.env.PORT as unknown as number,
  apollo_key: process.env.APOLLO_KEY,
  apollo_graph_variant: process.env.APOLLO_GRAPH_VARIANT,
  redis_port: process.env.REDIS_PORT as unknown as number,
  redis_host: process.env.REDIS_HOST,
  mongo_url: process.env.MONGO_URL,
};
