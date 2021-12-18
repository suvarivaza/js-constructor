import {templates} from '../tepmpates'

export class Sidebar {

    constructor(selector){
        this.$el = document.querySelector(selector)
        this.$el.addEventListener('submit', this.add)
    }

    render(){
        let html = this.getTemplate()
        this.$el.insertAdjacentHTML('beforeend', html)
    }

    getTemplate(){
        return [
            templates.sidebar('Title'),
            templates.sidebar('Text'),
        ].join('')
    }

    add(event){
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

    }


}

