import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import DiscordIcon from '@/components/discord-icon.vue'

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#f1f1f1',
                secondary: 'green', // TODO
                accent: 'green', // TODO
                error: '#cc0000',
            },
        },
    },
    icons: {
        values: {
            discord: {
                component: DiscordIcon,
                props: {
                    name: 'discord',
                }
            }
        }
    },
});
