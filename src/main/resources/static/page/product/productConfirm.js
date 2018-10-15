layui.use(['form','layer'],function(){
    var form = layui.form
    layer = parent.layer === undefined ? layui.layer : top.layer,
        $ = layui.jquery;

alert(1);
    //页面初始化
    var serverPath = "http://localhost:8080/broadband";
    $("#sysIdcard").val(parent.$("#sysIdcard").val());
    $("#productInfo").val(parent.$("#productInfo").val());

    var findProductBase = {
        "currentPage": 1,
        "pageSize": 50
    };



    var productData ="";
    var expensesData = "";
    var equipmentData = "";
    var equipmentModelData = "";
    var giftData = "";






})