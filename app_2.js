// Init GitHub
const github = new GitHub();

// Init UI
const ui = new UI();

// Search input
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                // console.log(data);
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User Not Found','alert alert-danger');
                    ui.clearProfile();
                } else {
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(error => console.log(error));
    } else {
        // Clear Profile
        ui.clearProfile();
    }

    e.preventDefault();
});