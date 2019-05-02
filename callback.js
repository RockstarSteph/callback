// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var ourPosition = i;
      console.log(ourPosition);
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(indexPosition) {
  console.log("Found him at index" + indexPosition);

  //console.log(findWaldo[0]);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);