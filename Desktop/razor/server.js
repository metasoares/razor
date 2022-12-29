/**
 * SERVER
 */

const { query } = require('express')
const express = require('express')
const path = require('path')
const { users } = require('./data')
const PORT = process.env.PORT || 7010
const app = express()

// Static pages
app.use(express.static('./access'))

//Middleware
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
   res.status(200).sendFile(path.resolve(__dirname, './access/home.html'))
})

// /api/user?email=john@gmailcom&passcode=john123'
app.get('/api/users/query', (req, res) =>{
    const { email, passcode} = req.query
     
    //checking if the email and passcode have been inserted
   if( email && passcode){
    //for email
    const newUserName = users.find((user) =>  {
        if(user.email === email){
            return user.name
        }
    })
    const name = users.map((user) => {
        if(user.email === email){
        const { id, name, image, passcode,email} = user
        return { name}
        }
    })
    //for passcode
    const newUserImage = users.find((user) => {
        if(user.passcode === passcode){
            return user.image
        } 
    })
    const image = users.map((user) => {
        if(user.passcode === passcode){
            const { id, name, image, passcode,email} = user
            return { image}
            }
    })

    const gallery = users.map((user) => {
      if(user.email === email){
        const { id, email, gallery, image, passcode, createdDate} = user
        return gallery
      }
    })
    console.log('SERVER GALLERY: ', gallery)

     return  res.status(200).json({ success: true, user: {name, image, gallery}})
    //Checking if email and passcode which have been inserted do not match
    if(!newUserName && !newUserImage ) {
      return  res.status(400).json({ success: false, message:'Your email and passcode both are incorrect. Try another ones'})
    }
    //Checking if email has not been inserted
    else if ( !newUserName ){
     return   res.status(400).json({ success:false, message:'Your email is incorrect. Try another one'})
    }
    //Checking if passcode has not been inserted
    else if(!newUserImage){
     return   res.status(400).json({ success: false, message: 'Your passcode is incorrect. Try another one'})
    }
    //Checking if passcode and  email match 
    else if(newUserName && newUserImage){
      return  res.status(200).json({ success: true, user: {name, image}})
    }
  

   }
   //if user neither insert email nor passcode
    else if ( !email && !passcode){
     return res.status(400).json({success: false, message: 'Missing credentials. Please insert them'})
   }
   //if user does not insert email 
   else if( !email){
    return res.status(400).json({success: false, message:'Missing email. Please insert it'})
   }
   //if user does not insert passcode
   else if( !passcode){
     return res.status(400).json({ success: false, message: 'Missing passcode. Please insert it'})
   }

})

//Sending data to profile page
app.get('/api/profile/query', (req, res) => {
  const { name} = req.query

  // if(name){
    const profile = users.find((user) => {
      if(user.name === name){
        return user
      }
    })

    
  if(!name){
       return res.status(400).json({success: false, message: 'Insert a name'})
    }
    else if(!profile){
      return res.status(400).json({success: false, message:'Profile not found'})
    }
    else {
      return res.status(200).json({ success: true, user: profile})
    }
})
// //Delete
app.delete('/api/removed/query',(req,res) => {
  const { name , image} = query

  if(name && image) {
    // const deletedUser = users.filter((user) => user.name !== name)
    return res.status(200).json({success: true, user: `You are signed out`})
  } else {
    return res.status(400).json({success: false, message:'Not found'})
  }

  
 
})





//Listening
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))