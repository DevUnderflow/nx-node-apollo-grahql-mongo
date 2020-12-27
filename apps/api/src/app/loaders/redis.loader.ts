import Redis from 'ioredis';
import { environment } from '../../environments/environment';

export const intializeRedisServer = () => {
  return new Redis({
    port: environment.redis_port, 
    host: environment.redis_host,
  });
};
