class GitHub {
    constructor(){
        this.client_id = 'acf08d34415bcc068b8c';
        this.client_secret = '8e1b96e6c4bab6bff65e8db1d12ffbbc150221b4';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
}