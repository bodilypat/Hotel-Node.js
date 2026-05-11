//src/core/services/queue.service.js 
import Queue from "bull";
import redisConfig from "../../fig/logger.js";

class QueueService {
    constructor() {
        this.queues = {};
    }

    createQueue(name) {
        if (!this.queue[name]) {
            this.queues[name] = new Queue(name, {
                redis: {
                    host: process.env.REDIS_HOST,
                    port: process.env.REDIS_PORT,
                },
            });

            logger.info(`Queue created: ${name}`);
        }

        return this.queue[name];
    }

    async addJob(queueName, jobName, data, options = {}) {
        try {
            const queue =  this.createQueue(queueName);
            
            const job = await queue.add(jobName, data, options);

            logger.info(`Job added: ${jobName}`);
            return job;
        } catch (error) {
            logger.error("Queue job error", error);
            throw error;
        }
    }

    process(queueName, handler) {
        const queue = this.createQueue(queueName);

        queue.process(async (job) => {
            logger.info(`Processing job: ${job.name}`);
            return handler(job);
        });
    }
}

export default new QueueService();
