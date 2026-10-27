<script>
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been submitted successfully!");
    this.reset();
});
</script>