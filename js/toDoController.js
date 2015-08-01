toDo.controller('toDoController', [function() {
  var self = this
  self.toDos = [];

  self.insertToDo = function() {
    self.toDos.push(self.newToDo)
    console.log(self.toDos)
  };
}]);

