
   const b = document.querySelector('.profile-name-view')
   const initialImage = document.querySelector('.profile-image')
   const imageBlock = document.querySelector('.image-block')
   const pnameBlock = document.querySelector('.profile-name-block')
   //
   const userName = document.querySelector('.name-view')
   const userId = document.querySelector('.id-view')
   const userEmail = document.querySelector('.email-view')
   const userDate = document.querySelector('.date-view')
   //Error page
   const errorPage = document.querySelector('.error-container')
   //Main Profile
   const mainProfile = document.querySelector('.main-profile')



console.log('PROFILE IMAGE: ', sessionStorage.getItem('profile-image'))
console.log('PROFILE ID: ', sessionStorage.getItem('profile-id'))
console.log('PROFILE createdDate: ', sessionStorage.getItem('profile-createdDate'))
console.log('PROFILE EMAIL: ', sessionStorage.getItem('profile-email'))
console.log('PROFILE NAME: ', sessionStorage.getItem('profile-name'))



if(sessionStorage.getItem('profile-name') && sessionStorage.getItem('profile-id') && sessionStorage.getItem('profile-email')
&& sessionStorage.getItem('profile-createdDate') && sessionStorage.getItem('profile-image')
){
  //error page
  errorPage.style.display = 'none'  // Off
  //Main Profile
  mainProfile.style.display = 'block' // On


  //Remove initial image class
    imageBlock.removeChild(initialImage)
    imageBlock.removeChild(pnameBlock)

   
  //Create image tag
    const img = document.createElement('img')
    img.setAttribute('class', 'profile-image')
   //Add profile to the website
   b.innerHTML = sessionStorage.getItem('profile-name')
   userName.innerHTML = sessionStorage.getItem('profile-name')
   userId.innerHTML = sessionStorage.getItem('profile-id')
   userEmail.innerHTML = sessionStorage.getItem('profile-email')
   userDate.innerHTML = sessionStorage.getItem('profile-createdDate')
   img.setAttribute('src',`${sessionStorage.getItem('profile-image')}`)

    //Add image to imageBlock container
    imageBlock.appendChild(img)
    imageBlock.appendChild(pnameBlock)
} else {

  
//Eror page
errorPage.style.display = 'block' // On
//Data Page
mainProfile.style.display = 'none' // Off

}



console.log(imageBlock.childNodes)