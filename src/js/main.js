// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

 document.querySelectorAll('.offcanvas-body .nav-link').forEach(link => {
            link.addEventListener('click', function () {
                var offcanvasElement = document.querySelector('#offcanvasMenu');
                var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                offcanvas.hide();
            });
        });