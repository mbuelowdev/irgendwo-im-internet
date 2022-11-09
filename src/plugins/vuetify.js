import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import DiscordIcon from '@/components/discord-icon.vue'

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        dark: true,
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
