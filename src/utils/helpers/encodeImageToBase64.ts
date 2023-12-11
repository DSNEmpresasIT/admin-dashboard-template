
export function encodeImageToBase64(file, callback) {
  const reader = new FileReader();
  reader.onloadend = function () {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}