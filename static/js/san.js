
var form = document.getElementById("sanwise-form-submit");
                  form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    fetch(form.action, {
                      method: "POST",
                      body: new FormData(
                        document.getElementById("sanwise-form-submit")
                      ),
                    })
                    .then((response) => response.json())
                    .then((html) => {
                      window.open("send_form.html", "_self");
                    });

                });