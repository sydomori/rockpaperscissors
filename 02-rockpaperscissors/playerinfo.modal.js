const formModal = document.getElementById('player-info-dialog');
const addModalButton = document.querySelector('.add-info-button');
const okButton = document.getElementById('confirm');
const cancelButton = document.getElementById('cancel');
console.log(addModalButton);

addModalButton.addEventListener('click',()=>{
  formModal.showModal();
})

okButton.addEventListener('click',()=>{
  formModal.close();
})

cancelButton.addEventListener('click',()=>{
  formModal.close();
})

