
document.addEventListener('click', (event) => {
    const openButton = event.target.closest('[id^="openImage"]');
    const closeButton = event.target.closest('[id^="closeImage"]');

    if (openButton) {
        const modalNumber = openButton.id.replace('openImage', '');
        const modal = document.querySelector(`#modal${modalNumber}`);
        modal.showModal();
    }

    if (closeButton) {
        const modalNumber = closeButton.id.replace('closeImage', '');
        const modal = document.querySelector(`#modal${modalNumber}`);
        modal.close();
    }
});