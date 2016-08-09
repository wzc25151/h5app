var source = 'src';
var platform_phone = '/phone';
var platform_pad = '/pad';
var platform_pc = '/pc';

var no_release = {
    release: false
};
var js_release = {
    optimizer: fis.plugin('uglify-js'),
    packTo: '/lib.js'
};
var css_release = {
    parser: fis.plugin('node-sass'),
    optimizer: fis.plugin('clean-css'),
    packTo: '/lib.css'
};

fis.set('project.files', [source + '/**']);
fis.set('settings.parser.node-sass', {
    include_paths: ['3rd/compass/lib']
});
fis.set('settings.parser.sass', {
    include_paths: ['3rd/compass/lib']
});

fis.match(source + '/(*)/(*.html)', {
    release: '/$1/$2'
});
fis.match(source + '/(*)/js/(*.js)', {
    isMod: false,
    release: '/$1/js/$2'
});
fis.match(source + '/(*)/scss/(*.scss)', {
    parser: fis.plugin('sass'),
    rExt: '.css',
    release: '/$1/css/$2'
});
fis.match(source + '/(*)/img/(*)', {
    release: '/$1/img/$2'
});

fis.media("phone")
    .match('*.js', js_release)
    .match('*.scss', css_release)
    .match('*.html', no_release)
    .match(source + platform_pad + '/js/*', no_release)
    .match(source + platform_pc + '/js/*', no_release)
    .match(source + platform_pad + '/scss/*', no_release)
    .match(source + platform_pc + '/scss/*', no_release);

fis.media("pad")
    .match('*.js', js_release)
    .match('*.scss', css_release)
    .match('*.html', no_release)
    .match(source + platform_phone + '/js/*', no_release)
    .match(source + platform_pc + '/js/*', no_release)
    .match(source + platform_phone + '/scss/*', no_release)
    .match(source + platform_pc + '/scss/*', no_release);

fis.media("pc")
    .match('*.js', js_release)
    .match('*.scss', css_release)
    .match('*.html', no_release)
    .match(source + platform_phone + '/js/*', no_release)
    .match(source + platform_pad + '/js/*', no_release)
    .match(source + platform_phone + '/scss/*', no_release)
    .match(source + platform_pad + '/scss/*', no_release);

fis.match('jquery.js', {
    optimizer: null
}).match('_*.scss', no_release);