 // YOUR CREDENTIALS
        const SERVICE_ID = 'service_z2cbhtg';
        const TEMPLATE_ID = 'template_0pyhy7e';
        const PUBLIC_KEY = '3iwC5ZT80miG5tAQk';

        // Initialize EmailJS
        emailjs.init(PUBLIC_KEY);

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            const submitBtn = document.getElementById('submitBtn');
            const feedback = document.getElementById('formFeedback');

            form.addEventListener('submit', function(event) {
                event.preventDefault();

                // Disable button and show sending status
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                feedback.innerHTML = '';
                feedback.style.color = '';

                // Get form values
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();

                // Validate
                if (!name || !email || !subject || !message) {
                    feedback.innerHTML = '❌ Please fill in all fields.';
                    feedback.style.color = 'red';
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                    return;
                }

                // Template parameters
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    subject: subject,
                    message: message
                };

                console.log('Sending email with params:', templateParams);

                // Send email
                emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                    .then(function(response) {
                        console.log('✅ Email sent successfully!', response);
                        feedback.innerHTML = '✅ Your message has been sent successfully! We\'ll get back to you soon.';
                        feedback.style.color = 'green';
                        form.reset();
                    })
                    .catch(function(error) {
                        console.error('❌ Failed to send email:', error);
                        let errorMsg = '❌ Failed to send message. ';
                        if (error.text) {
                            try {
                                const errData = JSON.parse(error.text);
                                errorMsg += errData.message || 'Please try again.';
                            } catch {
                                errorMsg += 'Please try again.';
                            }
                        } else {
                            errorMsg += 'Please check console for details.';
                        }
                        feedback.innerHTML = errorMsg;
                        feedback.style.color = 'red';
                    })
                    .finally(function() {
                        submitBtn.textContent = 'Send Message';
                        submitBtn.disabled = false;
                    });
            });
        });