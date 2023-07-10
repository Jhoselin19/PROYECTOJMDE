<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32"
        href="<?= base_url()?>/components/images/favicon-32x32.png">
    <title>FAMISALUD</title>
    <link rel="stylesheet" href="<?= base_url()?>/components/css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <!-- Incluir los estilos de SweetAlert2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <style>
    .loading-icon {
        font-size: 60px;
    }

    .countdown {
        font-size: 24px;
        margin-top: 10px;
    }
    </style>

</head>

<body>
    <main class="wrapper ">

        <div class="card">
            <div class="card-front">
                <img src="<?= base_url()?>/components/images/bg-card-front.png"
                    alt="Frente de la tarjeta">
                <div class="card-front__data">
                    <img src="<?= base_url()?>/components/images/card-logo.svg" alt="">
                    <div>
                        <p class="card-number" id="card-number">0000 0000 0000 0000</p>
                        <div class="card-name-date">
                            <p class="card-name" id="card-name">Jane Appleseed</p>
                            <p class="card-date">
                                <span id="card-month">00</span>/<span id="card-year">00</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-back">
                <img src="<?= base_url()?>/components/images/bg-card-back.png" alt="Dorso de la tarjeta">
                <div class="card-back__data">
                    <p class="card-cvc" id="card-cvc">000</p>
                </div>
            </div>
        </div>

        <div class="form-wrapper">
            <form class="form" id="form">
                <div class="form-group">
                    <label for="input-name" class="label">NOMBRE USUARIO</label>
                    <input type="text" class="input" id="input-name" placeholder="e.g. Jane Appleseed" required>
                </div>
                <div class="form-group">
                    <label for="input-number" class="label">NUMERO TARJETA</label>
                    <input type="text" class="input" id="input-number" placeholder="e.g. 1234 5678 9123 0000" required>
                </div>
                <div class="form-group double">
                    <div class="rows">
                        <label for="input-month" class="label">Exp. Date (MM/YY)</label>
                        <div class="columns">
                            <input type="text" class="input" id="input-month" placeholder="MM" maxlength="2" required>
                            <input type="text" class="input" id="input-year" placeholder="YY" maxlength="2" required>
                        </div>
                    </div>
                    <div class="rows">
                        <label for="input-cvc" class="label">CVC</label>
                        <input type="text" class="input" id="input-cvc" placeholder="e.g. 123" maxlength="3" required>
                    </div>
                </div>
                <div class="form-group">
                    <button class="button" id="segundavista" type="submit">Confirm</button>
                </div>
            </form>

            <div class="thank-you disabled" id="thank-you">
                <img src="<?= base_url()?>/components/images/icon-complete.svg"
                    alt="Ícono de completado">
                <p class="thank-you-title">GRACIAS!</p>
                <p class="thank-you-text">Su pago fue realizado con exito</p>
                <button class="button" id="continue">Continue</button>
               <!-- Contador regresivo -->
  <div id="countdown" class="countdown"></div>
            </div>
        </div>



    </main>


    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
 var submitted = false;
           // Función para cerrar la ventana
    function cerrarVentana() {
      window.close();
    }

    
    function mostrarAlertaDeCarga() {
        Swal.fire({
            icon: 'info',
            title: 'Procesando Pago...',
            showConfirmButton: false,
            allowOutsideClick: false,
            html: '<i class="fas fa-spinner fa-spin loading-icon"></i>',
            timer: 5000 // Tiempo en milisegundos (3 segundos)
        });
    }
   // Evento clic en el botón "Continuar"
   $('#continue').click(function() {
      cerrarVentana();
    });
    $(document).ready(function() {
        $('#segundavista').click(function(e) {
            // Validar que los campos estén llenados
            var inputNameValue = $('#input-name').val();
            var inputNumberValue = $('#input-number').val();
            var inputMonthValue = $('#input-month').val();
            var inputYearValue = $('#input-year').val();
            var inputCvcValue = $('#input-cvc').val();

            if (inputNameValue === '' || inputNumberValue === '' || inputMonthValue === '' ||
                inputYearValue === '' || inputCvcValue === '') {
                toastr.error('Completa todos los campos del formulario.', {
                    "toastClass": "toast-error"
                });
                return;
            }

            // Mostrar alerta de carga
            mostrarAlertaDeCarga();

            // Enviar formulario después del retraso
            setTimeout(function() {
           
                window.opener.$('#primeravista').submit();
            }, 5000);
        });
    });  
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.0.2/cleave.min.js"
        integrity="sha512-SvgzybymTn9KvnNGu0HxXiGoNeOi0TTK7viiG0EGn2Qbeu/NFi3JdWrJs2JHiGA1Lph+dxiDv5F9gDlcgBzjfA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="<?= base_url()?>/public/client/pago/assets/js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.js"></script>

</body>

</html>