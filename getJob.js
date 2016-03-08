'use strict';
const request = require('request');

const url = "http://zhaopin.baidu.com/api/async";


function getJob(qs,cb) {
	var qs = {
	query: "前端",
	salary: "",
	welfare: "",
	education: "",
	sort_key: "",
	sort_type: 1,
	city: "石家庄",
	district: "",
	experience: "",
	employertype: "",
	jobfirstclass: "",
	jobsecondclass: "",
	jobthirdclass: "",
	date: "",
	detailmode: "",
	rn: 100,
	pn: 0
}
	request.get({
		url, qs
	}, (err, res, body) => {
		if (err) cb(err);
		let data = JSON.parse(body);
		let jobs = data.data.data.disp_data;
		jobs.forEach((job) => {
			let {
				name, officialname, salary
			} = job
			console.log(name + " " + officialname + " " + salary);
		})
		cb(null,jobs)
	})
}

module.exports=getJob

