hexo.extend.helper.register('data_category_name', function (name) {
    return hexo.locals.get('data').category_names[name] || name;
});

hexo.extend.helper.register('data_tag_name', function (name) {
    return hexo.locals.get('data').tag_names[name] || name;
});

hexo.extend.helper.register('create_archives_map', function (posts) {
    // Return a map like {year: {month: [posts]}}
    return posts.reduce(function (result, post) {
        if (!result.has(post.date.year())) {
            result.set(post.date.year(), new Map());
        }
        if (!result.get(post.date.year()).has(post.date.month() + 1)) {
            result.get(post.date.year()).set(post.date.month() + 1, []);
        }
        result.get(post.date.year()).get(post.date.month() + 1).push(post);
        return result;
    }, new Map());
});