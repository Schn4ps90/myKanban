Vue.component('listcard', {
    props: ['title', 'text']
});

new Vue({
    el: "#app",
    data: {
        lists: [
            {title: "title1", text: "text1"},
            {title: "title2", text: "text2"},
            ]
    },
    template: '<listcard><div class="card"><h2>{{ title }}</h2><p>{{ text }}</p></div></listcard>'
})