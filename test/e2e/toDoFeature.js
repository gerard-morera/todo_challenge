describe('toDo list', function() {

  var toDoInsert   = element(by.model('toDoCtrl.newToDo'));
  var toDoDisplay  = element(by.className('list-todo-item'))
  var toDos        = element.all(by.repeater('toDo in toDoCtrl.toDos'));
 
  beforeEach(function() {
    browser.get('http://localhost:8080')
  })
  
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo list');
  });

  it('can add a new toDo', function() {
    toDoInsert.sendKeys('firstToDo').sendKeys(protractor.Key.ENTER);

    expect(toDos.first().getText()).toEqual('firstToDo')
  })
})
