import {templates} from '../tepmpates'
import {model} from '../model'

export class Site {

    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    render(){
        model.forEach(block => {

            let html = ''
            let templateName = block.type
            let templateFunc = templates[templateName]
            if(templateFunc) html = templateFunc(block)
            this.$el.insertAdjacentHTML('beforeend', html)
        })

    }
}