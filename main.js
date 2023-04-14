const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(heart => {
  heart.addEventListener("click", function () {
    if (heart.className !== "activated-heart") {
      mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART
        heart.className = "activated-heart"
      })
      .catch(error => {
        if (error) {
          const modal = document.querySelector("#modal")
          modal.className = '';
          modal.textContent = error
          setTimeout(function() {
            modal.className = 'hidden'
          }, 3000)
        }
      })
    } else {
      heart.innerText = EMPTY_HEART
      heart.className = "like-glyph"
    }
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
