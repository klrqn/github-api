
document.getElementById('usernameForm').addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.id === "submitBtn") {
		let username = document.getElementById('usernameInput').value;
		if (username) {
			requestUserData(username);
		}
	}
});

function getAvatar(url) {
	document.getElementById('avatar-img').src = url;
}

function requestUserData(username) {
	const url = `https://api.github.com/users/${username}`;
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function() {
		const data = JSON.parse(this.response);
		console.log(data);
		getAvatar(data.avatar_url);
	};
	// var avatarImgUrl = data.avatar_img;
	xhr.send();

}


