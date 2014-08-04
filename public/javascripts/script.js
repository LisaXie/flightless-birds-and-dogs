
$(function() {
  title = document.title;
  $("."+title).css({
    'display': 'block'
  });

	$('.anchorList a').click(function(event) {
		$('.texts').children().css({
			'display': 'none'
		});
    var name = event.target.id;
    history.pushState(null, name, '/'+name);
    document.title = name;
		event.preventDefault();
		$("."+name).css({
			'display': 'block'
		});
  });
});

