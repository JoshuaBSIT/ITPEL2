const addNme = document.querySelector('#input-name');
const addNumb = document.querySelector('#input-number');
const cncelBtn = document.querySelector('#btn-clear');
const adBtn = document.querySelector('#btn-add');
const contactList = document.querySelector('#contact-list');
const totalContact = document.querySelector('#total-contact');



let myTotalContacts = 0;


const clear =()=>{
  addNme.value = '';
  addNumb.value = '';
  

};


const presentAlert = ()=> {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = 'ALERT';
  alert.message = 'Please Enter Contact Name and Contact Number';
  alert.buttons = ['OK', 'Cancel'];

  document.body.appendChild(alert);
  alert.present();
};


cncelBtn.addEventListener ('click', clear);

//add expenses button EVent
adBtn.addEventListener('click', () => {
    const nameEntered = addNme.value;
    const numberEntered = addNumb.value;

    if(nameEntered.trim().length <= 0 || numberEntered <= 0 ||
    numberEntered.trim().length <= 0) {
      presentAlert();
      return;
    };
  
    console.log(nameEntered, numberEntered);

    const newContact = document.createElement('ion-item');
    newContact.textContent = nameEntered + ': ' + numberEntered;
    contactList.appendChild(newContact);

    clear();
});
