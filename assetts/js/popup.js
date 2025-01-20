document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code-input-box');
    const verifyBtn = document.getElementById('verify-btn');
    const errorMessage = document.getElementById('error-message');
    const verificationPage = document.getElementById('verification-page');
    const successPage = document.getElementById('success-page');

    // Handle input focus and auto-jump to the next input
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length === 1 && index < inputs.length - 1) {
                // Automatically move to the next input
                inputs[index + 1].focus();
            }
        });

        // Handle backspace to go to the previous input
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    // Verify button click handler
    verifyBtn.addEventListener('click', () => {
        let allFilled = true;

        // Check if all inputs are filled
        inputs.forEach((input) => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });

        if (allFilled) {
            // Hide verification page and show success page
            verificationPage.classList.add('hidden-section');
            successPage.classList.remove('hidden-section');
        } else {
            // Show error message
            errorMessage.textContent = 'يرجى تعبئة جميع الحقول.';
        }
    });
});
