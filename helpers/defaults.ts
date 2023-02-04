import { DefaultsInstance } from "vuetify/lib/framework.mjs"

export const defaults: DefaultsInstance = {
    VAppBar : {
        elevation: 0,
    }    ,
    VButton : {
        variant : "flat",
        height: "38",
        rounded: true ,
        size: "medium"
    },
    VTextField : {
        color: 'primary',
        variant: 'outlined' , 
        density: 'comfortable'
    }
}