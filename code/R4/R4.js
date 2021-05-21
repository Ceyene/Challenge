/* -------------------- Api Data ------------------ */

const ACCESS_KEY = "f57f61cd2606c18cabaf5bfc7ea9d929";
const ENDPOINT = "http://api.mediastack.com/v1/news";
const COUNTRIES = "ar,us";
const URL = `${ENDPOINT}?access_key=${ACCESS_KEY}&countries=${COUNTRIES}`;

/* ---------------- End of Api Data -------------- */

/* -------------- Rendering Api Data -------------- */

function newsRow({ title, url, source }) {
  return `
        <tr>
            <td>${title}</td>
            <td><a href=${url}>Link</a></td>
            <td>${source}</td>
        </tr>
    `;
}

/* ----------- End of Rendering Api Data ----------- */

/* ---------------- Getting Api Data -------------- */

async function getNews() {
  let html = "";

  try {
    //Api call
    const response = await fetch(URL);
    const data = await response.json();
    document.querySelector(".loader").classList.add("hide");

    //Handling data received
    const newsList = data.data;

    newsList.forEach((news) => {
      html += newsRow(news);
    });

    //Adding rows with data to the table
    document
      .getElementById("news-headers")
      .insertAdjacentHTML("afterend", html);
  } catch (err) {
    //In case of error: generate error message and inserting it into the table
    let message = err.statusText || "Ups, something went wrong...";
    document.getElementById("news-headers").insertAdjacentHTML(
      "afterend",
      `
        <tr class="error">
            <td colspan="6" >Error ${err.status}: ${message}</td>
        </tr>
      `
    );
  }
}

/* ----------- End of Getting Api Data ------------ */

getNews();
