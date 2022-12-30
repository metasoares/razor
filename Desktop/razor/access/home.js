const navbarLists = document.querySelector('.navbar-lists')
const triangleIcon = document.querySelector('.triangle-down')
const mainContainer = document.querySelector('.user-image-container')
const userName = document.querySelector('.user-name')
const miniContainer = document.querySelector('.user-image-mini-container')
const userImage = document.querySelector('.user-image')
const signIn = document.querySelector('.signIn')
const tabName = document.querySelector('.user-name-list')
const globeImage = document.querySelector('.globeImage')

//Gallery
const galleryDiv =  document.querySelector('.gallery-section')
const one =  document.querySelector('.one')
const two =  document.querySelector('.two')
const three =  document.querySelector('.three')
const four =  document.querySelector('.four')
const five =  document.querySelector('.five')
const six =  document.querySelector('.six')





 
//Nav Bar
// mainContainer.removeChild(navbarLists)
navbarLists.style.display = 'none'
//Triangle Icon 
// mainContainer.removeChild(triangleIcon)
triangleIcon.style.display = 'none'
 
if (sessionStorage.getItem('name') && sessionStorage.getItem('image') && sessionStorage.getItem('gallery-first') && sessionStorage.getItem('gallery-second')
&& sessionStorage.getItem('gallery-third') && sessionStorage.getItem('gallery-fourth') && sessionStorage.getItem('gallery-fifth') && sessionStorage.getItem('gallery-sixth')) {
    //Empty user label
    userName.innerHTML = ''
    tabName.innerHTML = ''
    //TRiangle Icon
    triangleIcon.style.display = 'block'

   

    // galleryDiv.appendChild()


    //Add user name label
    userName.innerHTML = sessionStorage.getItem('name')
    tabName.innerHTML = sessionStorage.getItem('name')
    //Create image tag
    const img = document.createElement('img')
    //Add image to container
    // const image = sessionStorage.getItem('image')
    img.setAttribute('class', 'new-user-image')
    img.setAttribute('src', `${sessionStorage.getItem('image')}`)

    
    //Remove sign in label
    signIn.innerHTML = ''
     //Container removes its child , i,e, its class calls user-image
     miniContainer.removeChild(userImage)
     //Add image to mini-container
    miniContainer.appendChild(img)
    mainContainer.appendChild(triangleIcon)

     //Gallery
     one.setAttribute('src',`${sessionStorage.getItem('gallery-first')}`)
     two.setAttribute('src',`${sessionStorage.getItem('gallery-second')}`)
     three.setAttribute('src',`${sessionStorage.getItem('gallery-third')}`)
     four.setAttribute('src',`${sessionStorage.getItem('gallery-fourth')}`)
     five.setAttribute('src',`${sessionStorage.getItem('gallery-fifth')}`)
     six.setAttribute('src',`${sessionStorage.getItem('gallery-sixth')}`)
}
 
function showList () {
        navbarLists.style.display = 'block'
}
 
async function fetchProfile () {
    try {
        const {data} = await axios.get(`/api/profile/query?name=${sessionStorage.getItem('name')}`)
        console.log(data.user)
        sessionStorage.setItem('profile-name', data.user.name)
        sessionStorage.setItem('profile-email', data.user.email)
        sessionStorage.setItem('profile-image', data.user.image)
        sessionStorage.setItem('profile-id', data.user.id)
        sessionStorage.setItem('profile-createdDate', data.user.createdDate)
    } catch (error) {
        console.log(error)
    }
}
 
fetchProfile()


// const signOut = ()=> {

//     navbarLists.style.display = 'none'
// triangleIcon.style.display = 'none'

// userName.innerHTML = 'User'
// miniContainer.removeChild(img)

// // img.style.display = 'none'
// // triangleIcon.style.display = 'none'
   
//     // try{
//     //     const { data } = axios.delete(`/api/removed/query?name=${sessionStorage.getItem('name')}&image=${sessionStorage.getItem('image')}`)
//     //     consolr.log('Deleted User: ' ,data.user)
      
//     //     //Remove User
//     //     sessionStorage.removeItem('name')
//     //     sessionStorage.removeItem('image')

//     // }
//     // catch(error){
//     //     console.log(error) 
//     // }
// }