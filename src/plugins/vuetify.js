import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

import "../assets/sass/overrides.sass";


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',

    },

    theme: {
        themes: {
            light: {
                background: '#ededed',
                primary: '#419cff',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                divider: "000000",
            },
            dark:{
                background: '#303030',
                primary: '#419cff',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                divider: "ffffff",
            }
        },
    },

});
