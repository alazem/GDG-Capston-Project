document.addEventListener("DOMContentLoaded", function () {
    console.log("Static JS loaded and running!");
    
    // Example: Show a message when a form is submitted
    const commentForm = document.querySelector("form");
    if (commentForm) {
        commentForm.addEventListener("submit", function (e) {
            alert("Your form has been submitted!");
        });
    }
});
