toDoModule.controller('toDoController', [function() {
  var self = this
  var index;
  self.displayable = [];
  self.toDos = [];

  self.insertToDo = function() {
    var toDo = new ToDo()
    toDo.message(self.newMessage)
    
    self.toDos.push(toDo)
    self.displayable = self.toDos.slice()
  };

  self.deleteToDo = function(aToDo) {
    index = self.toDos.indexOf(aToDo)
    self.toDos.splice(index, 1)

    self.displayable = self.toDos.slice()
  };

  self.changeState = function(aToDo) {
    if(aToDo.state()){
      aToDo.state(false);
    }else{
      aToDo.state(true)
    }
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
    return self.displayable;
  };

  self.allFilter = function () {
    self.displayable = self.toDos.slice()
  };

  self.activeFilter = function () {
    self.displayable.length = 0
    for (var i = 0; i < self.toDos.length; i++){
      if(self.toDos[i].state() === false){
        self.displayable.push(self.toDos[i]);
      };
    }
    return self.displayable;
  };

  self.clearAllFilter = function () {
    self.displayable.length = 0
  }
}]);
