function goCSR(url) {
  console.log("[goCSR] Navigating to:", url);

  const main = document.getElementById("main");
  if (!main) {
    console.error("[goCSR] ERROR: #main not found on current page");
    return;
  }

  fetch(url, { cache: "no-cache" })
    .then(res => {
      console.log("[goCSR] Fetch status:", res.status);
      return res.text();
    })
    .then(html => {
      console.log("[goCSR] Fetched HTML length:", html.length);

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const newMain = doc.getElementById("main");

      if (!newMain) {
        console.error("[goCSR] ERROR: #main not found in fetched page");
        main.innerHTML = "<p>ERROR: #main not found in " + url + "</p>";
        return;
      }

      console.log("[goCSR] Replacing content");
      main.innerHTML = newMain.innerHTML;
      history.pushState({}, "", url);
    })
    .catch(err => {
      console.error("[goCSR] FETCH ERROR:", err);
    });
}