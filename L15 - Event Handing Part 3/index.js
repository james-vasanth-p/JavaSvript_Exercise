const feedbackForm = document.getElementById('feedbackForm');
const response = document.getElementById('response');

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);

  // Convert FormData to a plain object
  const obj = {};
  formData.forEach((value, key) => {
    obj[key] = value;
  });

  const jsonobj = JSON.stringify(obj,null,2);
  console.log(jsonobj);

  response.innerHTML = `<pre>${jsonobj}</pre>`; // Fixed typo: textContent (not
});