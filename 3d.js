const followButton = document.getElementById('follow');
const followerCount = document.getElementById('follower-count');

let followers = parseInt(localStorage.getItem('followerCount')) || parseInt(followerCount.innerText);

followerCount.innerText = followers;

if (followers > 331) {
  followButton.innerText = "Followers";
  followButton.disabled = true;
}

followButton.addEventListener('click', () => {
  if (!followButton.disabled) {
    followers++;
    followerCount.innerText = followers;
    followButton.innerText = "Followers";
    followButton.disabled = true;
    localStorage.setItem('followerCount', followers);
  }
});

// Reset the follower count to 0 in local storage
//localStorage.setItem('followerCount', '0');
