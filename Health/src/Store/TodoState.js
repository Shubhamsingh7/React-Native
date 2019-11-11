import {observable, action, computed} from 'mobx';

class ToDoList {
  name = '';
  @observable toDoArrayList = [];

  @action addNewToDo = () => {
    this.toDoArrayList.push(this.name);
  };
  @observable title = 'jkcdbjjkd';

  @computed get toDoSize() {
    return this.toDoArrayList.length;
  }
}
export default new ToDoList();
