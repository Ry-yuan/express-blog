module.exports = function(app) {
    // 当访问更目录时
    app.get('/', function(req, res) {
        res.render('index', {
            title: '博客首页'
        });
    });
    app.get('/login', function(req, res) {
        res.render('login', {
            title: '登录'
        });
    });
    app.get('/reg', function(req, res) {
        res.render('reg', {
            title: '注册'
        });
    });
    app.get('/post', function(req, res) {
        res.render('post', {
            title: '发表文章'
        });
    });
};
