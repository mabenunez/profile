$.ajax(
    "https://api.github.com/users/mabenunez"
  ).done(function(data) {
    $('.profile-info__avatar').append(`<img src='${data.avatar_url}' alt='github-account-avatar'/>`)
    if (`${data.blog}` != "") {
      $(".profile-info__bio-cont").append(`<p>Mi sitio web: <span id="website-url">https://"${data.blog}"</span></p>`)
    }
});

$.ajax(
    "https://api.github.com/users/mabenunez/repos"
  ).done(function(data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        var name = `<p>Name: <span>${data[i].name}</span></p>`;
        var url = `<p>url: <span>${data[i].html_url}</span></p>`;
        var date = `<p>Last update: <span>${data[i].created_at}</span></p>`;
        var star = `<p>${data[i].stargazers_count}<i class="fas fa-star"></i></p>`;
        $('.repo-container').append(`<div class='repo'>${star}${name}${url}${date}</div>`);
    }
});
