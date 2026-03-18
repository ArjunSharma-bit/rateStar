const ratingState = document.getElementById('rating-state')
const thankyouState = document.getElementById('thank-you-state')
const submitBtn = document.getElementById('submit-btn')
const ratingValue = document.getElementById('rating-val')
const rateButtons = document.querySelectorAll('.rate-btn')

let selectedRating = null;

rateButtons.forEach((button) => {
    button.addEventListener('click', () => {
        rateButtons.forEach(btn => btn.classList.remove('active'))

        button.classList.add('active')

        selectedRating = button.textContent;
    })
})

submitBtn.addEventListener('click', () => {
    if (selectedRating) {
        ratingValue.textContent = selectedRating

        ratingState.classList.add('hidden');
        thankyouState.classList.remove('hidden');
    } else {
        alert("Please select a rating before submitting")
    }
})