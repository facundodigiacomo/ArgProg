var JSONObj = { "nombrelibro":"El hacedor", "precio":500 };


function libro() {
document.write("Compra el nuevo libro " + "<b>" + JSONObj.nombrelibro + "</b>" + " a tan solo $");
document.write(JSONObj.precio);
};

function test() {
    alert("The function 'test' is executed");
  }


