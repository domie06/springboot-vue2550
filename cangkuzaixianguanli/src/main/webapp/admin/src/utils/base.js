const base = {
    get() {
        return {
            url : "http://localhost:8080/cangkuzaixianguanli/",
            name: "cangkuzaixianguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cangkuzaixianguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "仓库在线管理系统"
        } 
    }
}
export default base
