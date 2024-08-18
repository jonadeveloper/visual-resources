const data = require('../data/resources.json');

class ResourcesService {
  constructor() {
    this.resources = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.resources.push(data.resources);
    }
  }

  create() {}

  find() {
    return this.resources;
  }

  findOne(id) {
    return this.resources[0].find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ResourcesService;
