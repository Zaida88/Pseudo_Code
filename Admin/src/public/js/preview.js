
const $filePicker = document.querySelector("#filePicker"),
    $imagePreview = document.querySelector("#imagePreview");

$filePicker.addEventListener("change", () => {
    const files = $filePicker.files;
    if (!files || !files.length) {
        $imagePreview.src = "";
        return;
    }
    const firstFile = files[0];
    const objectURL = URL.createObjectURL(firstFile);

    $imagePreview.src = objectURL;
});


