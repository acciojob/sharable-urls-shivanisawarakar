// your code here
const form = document.querySelector('form');
      const url = document.querySelector('#url');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const year = document.querySelector('#year').value;
        if (name && year) {
          const queryString = `?name=${name}&year=${year}`;
          url.textContent = `https://localhost:8080/${queryString}`;
        } else {
          alert('Name and year cannot be empty');
        }
      });