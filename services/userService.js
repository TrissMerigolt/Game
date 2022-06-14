const { UserRepository } = require('../repositories/userRepository');

class UserService {

module.exports = router;
    // TODO: Implement methods to work with user

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();

const { saveData } = require("../repositories/user.repository");

const getName = (user) => {
    if (user) {
        return user.name;
    } else {
        return null;
    }
};
module.exports = {
    getName
};

const saveName = (user) => {
    if (user) {
        return saveData(user.name);
    } else {
        return null;
    }
};

module.exports = {
    getName,
    saveName
};

const { saveData } = require("../repositories/user.repository");

const getName = (user) => {
    if (user) {
        return user.name;
    } else {
        return null;
    }
};

const saveName = (user) => {
    if (user) {
        return saveData(user.name);
    } else {
        return null;
    }
};

module.exports = {
    getName,
    saveName
};
