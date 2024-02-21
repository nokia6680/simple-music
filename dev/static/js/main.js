document.addEventListener('DOMContentLoaded', function() {
    var dialog = document.querySelector('.age');
    if (dialog) {
        dialog.showModal();

        document.querySelector('.age__closer').addEventListener('click', function() {
            dialog.close();
        });

        document.querySelector('.age__submit').addEventListener('click', function() {
            dialog.close();
        });
    }
});