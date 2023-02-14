const div = document.querySelector('body')
const cursor = document.createElement('div')
div.append(cursor)
const createCursor = (x,y) => {
    cursor.classList.add('cursor')
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
    return cursor
}
const removeCursor = (cursor) =>{
    const timeout = setTimeout(()=>{
        cursor.remove();
        clearTimeout(timeout)
    },500)
}
div.addEventListener('click',(e)=>{
    const cursor = createCursor(e.pageX ,e.pageY )
    div.append(cursor)
    removeCursor(cursor)
})