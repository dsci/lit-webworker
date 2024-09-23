onmessage = function(e) {
  console.log('Worker: Message received from main script');
  const result = e.data;
  if(result.action === "fetchUser") {
    fetch('/users').then((response) => {
      response.json().then((jsonResponse) => {
        this.postMessage(jsonResponse);
      })
    });
  }
  //console.log(result);
}