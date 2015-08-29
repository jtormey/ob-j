
module.exports = function modify(srcObject) {
  return new Modifier(srcObject);
};

function Modifier(srcObject) {
  this.src = srcObject;
  return this;
}

Modifier.prototype.to = function(destObject) {
  for (key in this.src) {
    destObject[key] = this.src[key];
  }
  return new Modifier(destObject);
};

Modifier.prototype.map = function(map) {
  for (key in this.src) {
    if (map[key]) {
      this.src[map[key]] = this.src[key];
    }
    if (map[key] !== key) delete this.src[key];
  }
  return this;
};

Modifier.prototype.exclude = function(excludes) {
  if (!excludes || !excludes.length) return this;
  for (key in this.src) {
    if (excludes.indexOf(key) > -1) {
      delete this.src[key];
    }
  }
  return this;
};

Modifier.prototype.filter = function(filters) {
  if (!filters || !filters.length) return this;
  for (key in this.src) {
    if (filters.indexOf(key) === -1) {
      delete this.src[key];
    }
  }
  return this;
};

Modifier.prototype.insert = function(obj) {
  for (key in obj) {
    if (this.src[key] === undefined) {
      this.src[key] = obj[key];
    }
  }
  return this;
};

Modifier.prototype.merge = function(obj) {
  for (key in obj) {
    this.src[key] = obj[key];
  }
  return this;
};

Modifier.prototype.output = function() {
  return this.src;
};
