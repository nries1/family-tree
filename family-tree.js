class FamilyTree {
  constructor(name) {
    if (!name || typeof name !== 'string') {
      throw new Error(
        'The Familily Tree constructor requires a string name as input.'
      );
    }
    this.value = name;
    this.children = [];
  }
  insert(name) {
    this.children.push(new FamilyTree(name));
  }
  familySize() {
    return this.children.length + 1;
  }
  findMember(name) {
    if (name === this.value) return this;
    let child;
    this.children.forEach(grandchild => {
      if (grandchild.value === name) child = grandchild;
    });
    return child;
  }
  log() {
    let string = `-- ${this.value}`;
    this.children.forEach(child => {
      string += `\n---- ${child.value}`;
      child.children.forEach(grandchild => {
        string += `\n------ ${grandchild.value}`;
      });
    });
    return string;
  }
}

module.exports = FamilyTree;
