
console.log("Let's get this party started!");
const zone = $('#zone');


function newGIF(res) {
    let resLength = res.data.length;
    let idx = Math.floor(Math.random() * resLength);
    // I'd like to examine how the two lines below work
    let addGIF = $("<img>", {
        src: res.data[idx].images.original.url});
    zone.append(addGIF);   
}


$('#btn-search').on('click', async function(event) {
    event.preventDefault();
    let searched = $('input').val();
    $('input').val('');
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {q: searched, 
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
         });
         newGIF(response.data); 
    });


    $("#btn-remove").on("click", function(event) {
        event.preventDefault();
        zone.empty();
      });

   

