document.querySelector('form').addEventListener('submit', event => {
   event.preventDefault();

   const input = document.querySelector('#message-input');
   const encrypted = btoa(input.value);

   document.querySelector('#link-input').value = encrypted;
   const encryptedInput = document.querySelector('#link-input');
   console.log(input.value, linkInput.value);

   const decrypted = atob(encryptedInput.value);
   document.querySelector('#link-decrypted-input').value = decrypted;   
})