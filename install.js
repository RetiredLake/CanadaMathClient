const steps = ['step1', 'step2', 'step3'];
let currentStep = 0;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        document.getElementById(steps[currentStep + 1]).classList.remove('hidden');
        currentStep++;
        document.getElementById(steps[currentStep]).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});