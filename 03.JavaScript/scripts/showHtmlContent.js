(function showContent() {
    var title = document.getElementById('title').textContent.toString();// get title of the document
    var file = '../' + title + '/' + title + '.html'; // add ../ and ".html" to make a file pat

    populatePre(file); //  it is the same like populatePre("../7.CheckPrime/7.CheckPrime.html"); // but it is more universal to use variables
    function populatePre(url) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var string = this.responseText;
            var positionBody = string.indexOf("<!--Solution");// find position on tag body
            document.getElementById('code').textContent = this.responseText.slice(positionBody);// show only html conten from <body to the end>
        };
        xhr.open('GET', url);
        xhr.send();

    }
}).call(this);