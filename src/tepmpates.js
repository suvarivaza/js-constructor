function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>`
}

function text(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>`
}

function columns(block) {
    let html = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`)
    return `<div class="row">${html.join('')}</div>`

}

function image(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <img src="${block.value}"/>
            </div>
        </div>`
}

function sidebar(type) {
    return `
<form name=${type}>
    <h5>${type}</h5>
    <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
    </div>
    <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="value">
        <button type="submit" class="btn btn-primary btn-sm">Submit</button>
    </div>
</form>`
}

export const templates = {
    title: title,
    text: text,
    columns: columns,
    image: image,
    sidebar: sidebar
}