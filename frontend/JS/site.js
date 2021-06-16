$.getJSON('/data',function(d){
    alert(JSON.stringify(d));
    $('#name').text(d.name);
    $('#author').text(d.author);
    $('#rating').text(d.rating);
    $('#review').text(d.review);
})