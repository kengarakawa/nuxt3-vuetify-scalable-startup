// import createVuetify 
import { createVuetify } from "vuetify"

import { aliases, custom } from "~~/helpers/customIcons"
import { lightTheme , darkTheme , LIGHT_THEME , DARK_THEME  } from "~~/helpers/themes"
import { defaults } from "~~/helpers/defaults"


// create vuetify instance
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({

        // enable ssr for rendering
        ssr: true,
        defaults: defaults,
        
        theme: {
            defaultTheme: DARK_THEME ,
            themes : {
                lightTheme , 
                darkTheme , 
            },
            variations: {
                colors: ['primary' , 'secondary'],
                lighten: 3,
                darken : 3 , 
            }
        },
        icons : {
            defaultSet: 'custom', 
            aliases: aliases ,
            sets: {
                custom, 
            },            
        }
    })

    // add vuetify to nuxt app
    nuxtApp.vueApp.use(vuetify)
})
