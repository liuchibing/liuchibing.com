hexo.extend.helper.register('data_category_name', function(name) {
    return hexo.locals.get('data').category_names[name] || name;
});

hexo.extend.helper.register('data_tag_name', function(name) {
    return hexo.locals.get('data').tag_names[name] || name;
});
