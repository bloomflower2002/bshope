        const emailConfig = window.__ENV__ && window.__ENV__.EMAILJS ? window.__ENV__.EMAILJS : {};
        const SERVICE_ID = emailConfig.SERVICE_ID || '';
        const TEMPLATE_ID = emailConfig.TEMPLATE_ID || '';
        const PUBLIC_KEY = emailConfig.PUBLIC_KEY || '';

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            const submitBtn = document.getElementById('submitBtn');
            const feedback = document.getElementById('formFeedback');

            if (!form || !submitBtn || !feedback) {
                return;
            }

            const emailjsAvailable = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && typeof emailjs !== 'undefined';

            if (emailjsAvailable) {
                emailjs.init(PUBLIC_KEY);
            }

            form.addEventListener('submit', function(event) {
                event.preventDefault();

                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                feedback.innerHTML = '';
                feedback.style.color = '';

                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();

                if (!name || !email || !subject || !message) {
                    feedback.innerHTML = '❌ Please fill in all fields.';
                    feedback.style.color = 'red';
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                    return;
                }

                const templateParams = {
                    from_name: name,
                    from_email: email,
                    subject: subject,
                    message: message
                };

                if (!emailjsAvailable) {
                    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
                    window.location.href = `mailto:support@bshope.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    feedback.innerHTML = 'Your email app is opening. Please send the prepared message to complete the request.';
                    feedback.style.color = 'orange';
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                    return;
                }

                console.log('Sending email with params:', templateParams);

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