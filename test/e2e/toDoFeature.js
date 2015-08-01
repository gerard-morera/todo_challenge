describe('toDo list', function() {

  var toDoInput = element(by.model('toDoCtrl.newToDo'));
  var allToDos  = element.all(by.repeater('toDo in toDoCtrl.toDos'));

  beforeEach(function() {
    browser.get('http://localhost:8080')
  })
  
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo list');
  });

  it('can add a new toDo', function() {
    toDoInput.sendKeys('firstToDo')

    expect(allToDos.getText()).toEqual('firstToDo')
  })
})
