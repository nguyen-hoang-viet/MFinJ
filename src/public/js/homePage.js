function openModal(el) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");

    // Lấy URL của background image, loại bỏ 'url("")'
    var bg = el.style.backgroundImage;
    var url = bg.slice(5, -2);

    modalImg.src = url;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
