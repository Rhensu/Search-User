class UI {
    constructor() {
        this.profile = document.querySelector('.profile');
    }

    showProfile(user) {
        // console.log(user);
        this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3"><img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary">View Profile</a>
            </div>
            <div class="col-md-9">
                    <span class="badge badge-primary">Public Repositories: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Follower: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span><br>
                    <ul class="list-group"><br>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div><br>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>`
    }

    // Show Repositories
    showRepos(repos) {
        let output = '';
        console.log(repos);
        repos.forEach(repo => {
            output += `<div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6"><a href="${repos.html_url}" target="_blank">${repo.name}</a></div>
                <div class="col-md-6"><span class="badge badge-primary">Stars: ${repo.stargazers_count}</span></div>
                <div class="col-md-6"><span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span></div>
                <div class="col-md-6"><span class="badge badge-success">Forks: ${repo.forks_count}</span></div>
            </div>
        </div>`
        });
        document.querySelector('#repos').innerHTML = output;
    }


    // Show Alert Message
    showAlert(message, className) {
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add Class
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Search Box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search) 
        // Create Timeout
        setTimeout (() => {
            this.clearAlert();
        }, 2000);
    }

    // Clear Alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}