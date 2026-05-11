//src/core/services/cache.service.js 
// =========================================
// FILE: src/core/services/cache.service.js
// =========================================

import redisClient from '../../config/redis.js';
import logger from '../../config/logger.js';

class CacheService {
  /**
   * Set cache value
   * @param {string} key
   * @param {*} value
   * @param {number} ttl - Time to live in seconds
   */
  async set(key, value, ttl = 3600) {
    try {
      const serializedValue = JSON.stringify(value);

      await redisClient.set(key, serializedValue, {
        EX: ttl,
      });

      logger.info(`Cache SET: ${key}`);

      return true;
    } catch (error) {
      logger.error(`Cache SET failed: ${error.message}`);

      return false;
    }
  }

  /**
   * Get cache value
   * @param {string} key
   */
  async get(key) {
    try {
      const data = await redisClient.get(key);

      if (!data) {
        logger.info(`Cache MISS: ${key}`);
        return null;
      }

      logger.info(`Cache HIT: ${key}`);

      return JSON.parse(data);
    } catch (error) {
      logger.error(`Cache GET failed: ${error.message}`);

      return null;
    }
  }

  /**
   * Delete cache key
   * @param {string} key
   */
  async del(key) {
    try {
      await redisClient.del(key);

      logger.info(`Cache DELETE: ${key}`);

      return true;
    } catch (error) {
      logger.error(`Cache DELETE failed: ${error.message}`);

      return false;
    }
  }

  /**
   * Check if key exists
   * @param {string} key
   */
  async exists(key) {
    try {
      const exists = await redisClient.exists(key);

      return Boolean(exists);
    } catch (error) {
      logger.error(`Cache EXISTS failed: ${error.message}`);

      return false;
    }
  }

  /**
   * Set expiration time
   * @param {string} key
   * @param {number} ttl
   */
  async expire(key, ttl) {
    try {
      await redisClient.expire(key, ttl);

      logger.info(`Cache EXPIRE: ${key} (${ttl}s)`);

      return true;
    } catch (error) {
      logger.error(`Cache EXPIRE failed: ${error.message}`);

      return false;
    }
  }

  /**
   * Increment value
   * @param {string} key
   */
  async increment(key) {
    try {
      const value = await redisClient.incr(key);

      logger.info(`Cache INCREMENT: ${key}`);

      return value;
    } catch (error) {
      logger.error(`Cache INCREMENT failed: ${error.message}`);

      return null;
    }
  }

  /**
   * Decrement value
   * @param {string} key
   */
  async decrement(key) {
    try {
      const value = await redisClient.decr(key);

      logger.info(`Cache DECREMENT: ${key}`);

      return value;
    } catch (error) {
      logger.error(`Cache DECREMENT failed: ${error.message}`);

      return null;
    }
  }

  /**
   * Clear all cache
   */
  async flush() {
    try {
      await redisClient.flushAll();

      logger.warn('All cache cleared');

      return true;
    } catch (error) {
      logger.error(`Cache FLUSH failed: ${error.message}`);

      return false;
    }
  }

  /**
   * Get TTL of a key
   * @param {string} key
   */
  async ttl(key) {
    try {
      return await redisClient.ttl(key);
    } catch (error) {
      logger.error(`Cache TTL failed: ${error.message}`);

      return -1;
    }
  }

  /**
   * Store hash map
   * @param {string} key
   * @param {Object} data
   */
  async hSet(key, data) {
    try {
      await redisClient.hSet(key, data);

      logger.info(`Cache HSET: ${key}`);

      return true;
    } catch (error) {
      logger.error(`Cache HSET failed: ${error.message}`);

      return false;
    }
  }

  /**
   * Get hash map
   * @param {string} key
   */
  async hGetAll(key) {
    try {
      return await redisClient.hGetAll(key);
    } catch (error) {
      logger.error(`Cache HGETALL failed: ${error.message}`);

      return null;
    }
  }
}

export default new CacheService();