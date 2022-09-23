const http = require("k6/http");

const users = [
  // Fill items here
];

export default function () {
  const url =
    "http://localhost:8090/quiz/api/v1/game/01GDJ73XVSZQ3GDGEQE987JC91/join/";
  const payload = JSON.stringify({});
  //   const user = users[Math.floor(Math.random() * users.length)];
  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    const params = {
      headers: {
        "Content-Type": "application/json",
        "X-User-ID": user.uid,
        "X-User-Phone": user.phone,
      },
    };

    http.post(url, payload, params);
  }
}
