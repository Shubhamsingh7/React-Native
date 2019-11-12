import {observable, action} from 'mobx';

class RandomUserStore {
  @observable name = '';
  @observable Uniqueid = '';
  @observable list = [];
  @action double() {
    this.list = this.list.filter(obj => obj.id != this.Uniqueid);
  }
}
// console.warn(this.name)

export default new RandomUserStore();
