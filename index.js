const getJob=require("./getJob");
var option={
	query:"java",
	city:"北京"
}
getJob(option,function(err,jobs){
	if(err) return;
//	console.log(jobs)
})
