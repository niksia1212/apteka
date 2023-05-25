// Rating System
const stars = document.querySelectorAll('.star');
stars.forEach((star) => {
  star.addEventListener('click', setRating);
});

function setRating(e) {
  const clickedStar = e.target;
  const comment = clickedStar.parentNode.parentNode.parentNode;
  const rating = comment.querySelector('.rating');

  rating.querySelectorAll('.star').forEach((star, index) => {
    if (index < clickedStar.dataset.rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// Show More Comments
const showMoreButton = document.querySelector('.show-more-button');
const commentBox = document.querySelector('.comment-box');
const comments = commentBox.children;

let currentComments = 3;

showMoreButton.addEventListener('click', showMore);

function showMore() {
  currentComments += 3;
  for (let i = 0; i < comments.length; i++) {
    if (i < currentComments) {
      comments[i].style.display = 'flex';
    } else {
      comments[i].style.display = 'none';
    }
  }
  
  if (currentComments >= comments.length) {
    showMoreButton.style.display = 'none';
  }
}