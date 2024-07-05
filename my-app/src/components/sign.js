function islogbtn() {
    const islogin = props.islogin;
    if(islogin) {
        return <logoutbtn/>
    }
    else {
        return <loginbtn/>
    }
}