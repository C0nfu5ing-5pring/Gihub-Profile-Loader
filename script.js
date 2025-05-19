let submitBtn = document.querySelector(".submitBtn");
let userinp = document.querySelector(".userinp");
let card = document.querySelector(".card");
let reposContainer = document.querySelector(".reposContainer");

function getUserData(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if (!raw.ok) {
      alert("User not found. Please check the username and try again.");
      location.reload();
    }
    return raw.json();
  });
}

function getUserRepoData(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  ).then((raw) => {
    if (!raw.ok) {
      alert("Repository not found. Please check the username and try again.");
      location.reload();
    }
    return raw.json();
  });
}

function decorateCard(details) {
  let data = `
  
  <div class="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-blue-600">
        <img src="${
          details.avatar_url
        }" alt="Avatar" class="w-full h-full object-cover" />
      </div>

      <div class="flex-1 flex flex-col gap-4">
        
        <div>
          <h2 class="text-2xl font-bold leading-tight">${
            details.name ? details.name : ""
          }</h2>
          <p class="text-blue-400">@${details.login}</p>
        </div>

        <p class="text-zinc-300 text-sm italic">${
          details.bio ? details.bio : ""
        }</p>

        <div class="grid grid-cols-3 divide-x divide-zinc-700 text-center text-sm bg-zinc-900 rounded-lg overflow-hidden shadow-inner">
          <div class="px-3 py-2">
            <p class="text-xl font-semibold">${details.public_repos}</p>
            <p class="text-zinc-400">Repos</p>
          </div>
          <div class="px-3 py-2">
            <p class="text-xl font-semibold">${details.followers}</p>
            <p class="text-zinc-400">Followers</p>
          </div>
          <div class="px-3 py-2">
            <p class="text-xl font-semibold">${details.following}</p>
            <p class="text-zinc-400">Following</p>
          </div>
        </div>

        <div class="grid gap-1 text-sm text-zinc-400 mt-2">
          <p>📍 ${details.location ? details.location : "N/A"}</p>
          <p>🏢 ${details.company ? details.company : "N/A"}</p>
          <p>🔗 <a href="${
            details.blog
          }" class="text-blue-400 hover:underline" target="_blank">${
    details.blog ? details.blog : "N/A"
  }</a></p>
          <p>🐦 @${details.login}</p>
          <p>📅 Joined ${details.created_at.split("T")[0]}</p>
        </div>`;

  card.innerHTML = data;
}

function decorateRepo(details) {
  // console.log(details);
  for (let i = 0; i < 6; i++) {
    let repo = details[i];
    let data = `
  

        <div
          class="bg-zinc-800 border border-zinc-700 rounded-xl p-4 shadow hover:bg-zinc-700 transition"
        >
          <a
            href="${repo.homepage === null ? repo.clone_url : repo.homepage}"
            target="_blank"
            class="text-lg font-bold text-blue-400 hover:underline"
          >
            ${repo.name}
          </a>
          <p class="text-sm text-zinc-300 mt-1">
            ${repo.description ? repo.description : ""}
          </p>
          <div
            class="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-3"
          >
            <span class="bg-zinc-700 px-2 py-1 rounded-full">⭐ ${
              repo.stargazers_count ? repo.stargazers_count : "0"
            }</span>
            <span class="bg-zinc-700 px-2 py-1 rounded-full">🍴 ${repo.created_at.slice(
              0,
              10
            )}</span>
            <span class="bg-zinc-700 px-2 py-1 rounded-full"
              >💻 ${repo.language ? repo.language : "N/A"}</span
            >
            <span class="ml-auto">🕒 Updated on ${
              repo.updated_at.split("T")[0]
            }</span>
          </div>
        </div>`;
    reposContainer.innerHTML += data;
  }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  userinp.value.trim();
  if (userinp.value.length > 0) {
    getUserData(userinp.value).then((data) => {
      decorateCard(data);
    });

    getUserRepoData(userinp.value).then((data) => {
      decorateRepo(data);
    });
    reposContainer.innerHTML = "";
  } else {
    throw new Error(
      "Something went wrong or you entered too many requests. Try again after an hour"
    );
  }
});
