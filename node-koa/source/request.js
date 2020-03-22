module.exports = {
    get url() {
        return this.req.url
    },
    get method(){
        this.req.method.toLowerCase()
    }
}