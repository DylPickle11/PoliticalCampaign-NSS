const elizabethSanger = {
   congressDist: 34,
   platformStatements: {
     taxes:'well invested taxes',
     jobs:'less hours, more pay',
     infrastructure:'these potholes are out of control',
     healthCare:'who doesn\'t deserve healthcare?',
     CrimeAndEnforcement:'rehabilitation is key',
   },
   urlDonatForm: 'www.ElizabethSangerNeedsYourMoney.com',
   calendarOfEvents: 'www.ElizabethSangerCalendar.com',
   volInfo: {
     name:'',
     address: '',
     email:'',
     phoneNumber:'',
     availability:[],
     activites:['Telephones']
   },
   bio:'',
   imageGallery:{
     headShot:'',
     famPic:'',
     constPic:'',
   },
   missionStatement:'Can We? Yes!',
   urlregistVote:'www.registerToVote.com' 
}

/* Advance Challenge*/

function addVolunteerInfo (name, address, email, phone, avail, activ) {
  elizabethSanger.volInfo.availability += avail;
  elizabethSanger.volInfo.activities += activ;
  
  console.log(
  elizabethSanger.volInfo.name = name,
  elizabethSanger.volInfo.address = address,
  elizabethSanger.volInfo.email = email,
  elizabethSanger.volInfo.phoneNumber = phone,
  elizabethSanger.volInfo.availability = avail,
  elizabethSanger.volInfo.activites = activ)
}

addVolunteerInfo('Oscar', '80 Milton Ave', 'oscar@gmail.com', '555-888-9876', 'Monday', 'voting poll, counting pens');

function changeBio (bio) {
  console.log(elizabethSanger.bio = bio);
  
}
 changeBio('elizabethSanger is an awesome candidate');

function addImageGallery (headshot, famPic, constPic) {

 console.log(
   elizabethSanger.imageGallery.headshot = headshot,
   elizabethSanger.imageGallery.famPic = famPic,
   elizabethSanger.imageGallery.constPic = constPic,
 )
}

addImageGallery('img123.jpg','img.65.jpg','img789.jpg');

function addPlatform (topic, newPlatformStatement) {

}

