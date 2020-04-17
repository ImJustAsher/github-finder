class Github {
  constructor() {
    this.client_id = "3878b4c307d0d6d2901e";
    this.client_secret = "cc5792b07cf9012054c0df626302d5860f2fa3bb";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResonse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResonse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
