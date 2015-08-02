describe('toDoController', function() {
  beforeEach(module('toDoModule'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller('toDoController');
  }));

  it('initialize with empty toDo list', function() {
    expect(controller.toDos).toBe([]);
  });
})