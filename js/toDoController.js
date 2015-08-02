toDoModule.controller('toDoController', [function() {
  var self = this
  var index;
  self.displayable = [];
  self.toDos = [];

  self.insertToDo = function() {
    var toDo = new ToDo();
    toDo.message(self.newMessage);
    
    self.toDos.push(toDo);
    self.displayable = self.toDos.slice();
    self.countItemsLeft();
    self.newMessage = ''
  };

  self.deleteToDo = function(aToDo) {
    index = self.toDos.indexOf(aToDo)
    self.toDos.splice(index, 1)

    self.displayable = self.toDos.slice()
    self.countItemsLeft();
  };

  self.changeState = function(aToDo) {
    if(aToDo.state()){
      aToDo.state(false);
    }else{
      aToDo.state(true)
    }
    self.countItemsLeft();
  };

  function ToDo() { 
    var currentState = false

    this.state = function (newState) {
      if(typeof newState !== "undefined"){
        currentState = newState;
      };
      return currentState;
    };
    this.message = function(newMessage) {
      if(typeof newMessage !== "undefined"){
        this.thought = newMessage
      };
      return this.thought;
    };
  };

  self.completeFilter = function () {
    self.displayable.length = 0
  
    for (var i = 0; i < self.toDos.length; i++){
      if(self.toDos[i].state()){
        self.displayable.push(self.toDos[i]);
      };
    }
    self.countItemsLeft();
    return self.displayable;
  };

  self.allFilter = function () {
    self.displayable = self.toDos.slice()
    self.countItemsLeft();
  };

  self.activeFilter = function () {
    self.displayable.length = 0
    for (var i = 0; i < self.toDos.length; i++){
      if(self.toDos[i].state() === false){
        self.displayable.push(self.toDos[i]);
      };
    }
    self.countItemsLeft();
    return self.displayable;
  };

  self.clearAllFilter = function () {
    self.displayable.length = 0;
    self.countItemsLeft();
  }

  self.countItemsLeft = function () {
    self.itemsLeft = 0
    for (var i = 0; i < self.displayable.length; i++){
      if(self.displayable[i].state() === false){
        self.itemsLeft += 1
      };
    };
    return self.itemsLeft;
  }
}]);
