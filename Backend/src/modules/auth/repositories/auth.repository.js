//src/modules/auth/repositories/auth.repository.js 
const BaseRepository = require('../../../core/base/BaseRepository');

const { user } = require('../../users/models');

class AuthRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    async findByEmail(email ) {
        return this.model.findOne({
            where: { email },
        });
    }
}

module.exports = new AuthRepository();
