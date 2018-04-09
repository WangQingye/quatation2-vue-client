const globalMethods = {
    methods: {
        tipSuccess(msg) {
            this.$message({
                type: 'success',
                message: msg
            })
        },
        tipError(msg) {
            this.$message({
                type: 'error',
                message: msg
            })
        },
    },
}

export {
    globalMethods
}
