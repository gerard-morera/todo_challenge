describe('toDo list', function() {

  var toDoInsert      = element(by.model('toDoCtrl.newMessage'));
  var toDoDelete      = element(by.className('delete-todo'));
  var toDoDisplay     = element.all(by.repeater('toDo in toDoCtrl.displayable'));
  var toDoStateButton = element(by.className('state'));

  var completeFilterButton = element(by.className('complet-filter'));
  
  beforeEach(function() {
    browser.get('http://localhost:8080')
  })
  
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo list');
  });

  it('can add a new toDo', function() {
    toDoInsert.sendKeys('firstToDo').sendKeys(protractor.Key.ENTER);

    expect(toDoDisplay.first().getText()).toEqual('firstToDo')
  });

  it('can delete a toDo', function() {
    toDoInsert.sendKeys('firstToDo').sendKeys(protractor.Key.ENTER);
    toDoDelete.click();

    expect(toDoDisplay.getText()).toNotEqual('firstToDo');
  })

  it('can be click as done', function() {
    toDoInsert.sendKeys('firstToDo').sendKeys(protractor.Key.ENTER);
    action = toDoStateButton.isSelected();

    expect(action).toBeTruthy();
  })

  it('filters by complete', function() {
    toDoInsert.sendKeys('firstToDo').sendKeys(protractor.Key.ENTER);
    
    completeFilterButton.click();
    expect(toDoDisplay.getText().count()).toEqual(0);
  })

})