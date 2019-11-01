
  class Name {
  title: String;
  lastName: String;
  firstName: String;

  constructor(userName) {
    this.title = userName.title;
    this.lastName = userName.last;
    this.firstName = userName.first;
    // console.warn(userName);
  }
}
class UserLocation {
  city: String;
  state: String;
  country: String;
  postcode: String;

  constructor(userLocation) {
    this.city = userLocation.city;
    this.state = userLocation.state;
    this.country = userLocation.country;
    this.postcode = userLocation.postcode;
    // console.warn(userLocation);
  }
}
class User {
  name: Name;
  cell: String;
  email: String;
  gender: String;
  picture: String;
  address: UserLocation;

  constructor(userInfo) {
    this.cell = userInfo.cell;
    this.name = userInfo.name;
    this.email = userInfo.email;
    this.gender = userInfo.gender;
    this.picture = userInfo.picture;
    this.address = userInfo.location;
    // console.warn(userInfo);

    this.populateUserLocation(this.address);
    this.populateName(this.name);
  }
  populateUserLocation(userLocation) {
    new UserLocation(userLocation);
  }
  populateName(userName) {
    new Name(userName);
  }
}

export default class UserDataArray {
  userDataArray: [User];

  constructor(responseArray) {
    this.userDataArray = responseArray;
    responseArray.forEach(userInfo => {
      this.populateUser(userInfo);
    });
  }
  populateUser(userInfo) {
    new User(userInfo);
  }
}

