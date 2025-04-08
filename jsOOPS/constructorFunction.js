function Degree(level, name) {
  this.level = level;
  this.name = name;
  this.setDetails = function () {
    let detailsObj = {
      level: this.level,
      name: this.name,
    };
    return detailsObj;
  };
}
Degree.prototype.grad = function () {
  return `Something interesting`;
};

const bimA = new Degree("master", "bimA+");
console.log(bimA.grad());
