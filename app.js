document.getElementById("moodForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get inputs
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const moods = Array.from(document.getElementById("mood").selectedOptions).map(option => option.value);

    // Validate name: only letters and spaces allowed
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name. Numbers and special characters are not allowed.");
        return; // Stop form submission
    }

    // Show loading animation
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<div class="spinner"></div> Finding a perfect song for you...`;

    // Simulate a delay (for animation effect)
    setTimeout(() => {
        // Construct a YouTube search query
        const moodQuery = moods.join(" ");
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(moodQuery + " song")}`;

        // Display the result
        resultDiv.innerHTML = `
            Hi ${name}, based on your moods (${moods.join(", ")}), we found a list of songs that might make your day better! <br>
            <a href="${searchUrl}" target="_blank">Click here to check them out on YouTube</a>
        `;
    }, 2000);
});
