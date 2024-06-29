document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.form-login input');

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.classList.add('filled');
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.classList.remove('filled');
      }
    });

    if (input.value) {
      input.classList.add('filled');
    }
  });
});
