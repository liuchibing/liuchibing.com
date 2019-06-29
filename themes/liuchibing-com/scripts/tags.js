hexo.extend.tag.register('embed_video', function(args) {
    src = args[0];
    return '<div class="embed-responsive embed-responsive-16by9 mb-3">' + 
    '<iframe class="embed-responsive-item" src="' + src + '" allowfullscreen></iframe>' +
    '</div>';
});