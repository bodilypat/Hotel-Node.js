//src/core/services/auditLog.service.js 
import logger from "../../config/logger.js";

class AuditService {
    async log({
        userId,
        action,
        entity,
        entityId,
        oldData = null,
        newData = null,
        ipAddress = null,
        userAget = null, 
    }) {
        try {
            const logData = {
                timeStamp: new Date(),
                userId,
                action,
                entity,
                entityId,
                oldData,
                newData,
                ipAddress,
                userAgent,
            };

            logger.info("AUDIT_LOG", logData);

            return logData;
        } catch (error) {
            logger.error("Audit log failed", error)
        }
    }
}

export default new AuditLogService();

