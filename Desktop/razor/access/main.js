const inputEmail = document.querySelector('.email');

const inputPasscode = document.querySelector('.passcode');
const btnSubmit = document.querySelector('.sign-btn');
//Alert
const emailAlert = document.querySelector('.alert-email');
const passcodeAlert = document.querySelector('.alert-passcode');
//Form Alert
const formAlert = document.querySelector('.alert');

//Result
const result = document.querySelector('.result');
const resultAlert = document.querySelector('.result-alert');
//Name and Image
const nameRes = document.querySelector('.name-result');
const imageRes = document.querySelector('.image-result');

//Default Page and Error Page
const body = document.querySelector('.body');
const defaultPage = document.querySelector('.default-page');
const errorPage = document.querySelector('.error-page');

// body.removeChild(errorPage);

// if (
//   sessionStorage.getItem('userName') &&
//   sessionStorage.getItem('userId') &&
//   sessionStorage.getItem('userEmail') &&
//   sessionStorage.getItem('userImage')
// ) {
//   body.removeChild(defaultPage);
//   body.appendChild(errorPage);
// }

btnSubmit.addEventListener('click', async (e) => {
  e.preventDefault();

  //
  try {
    //
    let emailValue = inputEmail.value;
    let passValue = inputPasscode.value;

    //
    const { data } = await axios.get(
      `/api/users/query?email=${emailValue}&passcode=${passValue}`
    );

    console.log('Name data', data.user);
    // console.log('Image data', data.user.image);
    // console.log('ID data', data.user.id)

    const newName = data.user.name.find((user) => user !== null);
    // const newEmail = data.user.email.find((user, index) => {
    //   if (index >= 0) {
    //     return user !== null;
    //   }
    // });
    const newImage = data.user.image.find((user, index) => {
      if (index >= 0) {
        return user !== null;
      }
    });

    const gallery = data.user.gallery.find((user, index) => {
      if (index >= 0) {
        return user !== null;
      }
    });

    console.log('Gallery: ', gallery);
    sessionStorage.setItem('gallery-first', gallery.first);
    sessionStorage.setItem('gallery-second', gallery.second);
    sessionStorage.setItem('gallery-third', gallery.third);
    sessionStorage.setItem('gallery-fourth',gallery.fourth);
    sessionStorage.setItem('gallery-fifth', gallery.fifth);
    sessionStorage.setItem('gallery-sixth', gallery.sixth);

    //For name
    // nameRes.innerHTML = newName.name;
    //Storing the name and id
    sessionStorage.setItem('name', `${newName.name}`);

    //For image
    // const img = document.createElement('img');
   // img.setAttribute('src', `${newImage.image}`);
    //Storing the image
    sessionStorage.setItem('image', `${newImage.image}`);
    // console.log('Image', img);
    // imageRes.appendChild(img);
    // console.log('Image Resut', imageRes);
    // location.assign('http://localhost:7010/home.html');
  } catch (error) {
    console.log(error);
    // formAlert.innerHTML = error.data.message;
    formAlert.innerHTML = error;
    console.log(error);
  }
  inputEmail.value = '';
  inputPasscode.value = '';
});