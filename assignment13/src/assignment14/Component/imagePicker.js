import ImagePicker from 'react-native-image-crop-picker';

const PickImageFromGallery = {
  getSinglePic: callback => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      callback(image.path);
    });
  },

  getMultiplePic: callback => {
    let temp = [];
    ImagePicker.openPicker({
      cropping: true,
      multiple: true,
    }).then(image => {
      image.forEach(item => {
        temp.push(item.path);
      });
      callback(temp);
    });
  },
};

export default PickImageFromGallery;
