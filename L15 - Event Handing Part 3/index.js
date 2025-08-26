const feedbackForm = document.getElementById('feedbackForm');
const response = document.getElementById('response');


feedbackForm.addEventListener('submit',function (event) {
  event.preventDefault();
  const formData = new FormData(this);

  console.log(formData);
  
  const jsonobj = JSON.stringify(formData);
  console.log(jsonobj);
  response.textcontent = jsonobj;


})