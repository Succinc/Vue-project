;
(function() {

	//获取时间
	function handleCurrentDate() {
		var date = new Date();
		// 年
		var year = date.getFullYear();
		// 月
		var mouth = date.getMonth() + 1;
		// 日
		var nowDate = date.getDate();
		// 小时
		var hour = date.getHours();
		// 分
		var miute = date.getMinutes();
		return year + "-" + mouth + "-" + nowDate + " " + hour + ":" + miute;
	};

	function random() {
		var myimg = new Array("0a.jpg", "1a.jpg", "2a.jpg", "3a.jpg", "4a.jpg");
		var aDom = Math.floor(Math.random() * 4);
		console.log("img/" + aDom + "a.jpg");
		return "img/" + aDom + "a.jpg";

	}

	function methods() {
		var app = new Vue({
			el: "#wrap",
			data: function() {
				return {
					publishedComments: "发表留言",
					buttonTwo: "X",
					release: "确认发布",

					flag: false,
					buttonValue: "",
					list: [

						{
							img: "./img/1a.jpg",
							text: "今天是周一，但是我很瞌睡！",
							time: handleCurrentDate(),
							delet: "删除"
						},
						{
							img: "./img/3a.jpg",
							text: "今天是周二，但是我很瞌睡！",
							time: handleCurrentDate(),
							delet: "删除"
						}

					],
				}
			},
			//关闭隐藏
			methods: {
				theEventClick: function() {
					this.flag = !this.flag;
				},
				releaseClick: function() {
					console.log(this.buttonValue);
					this.textVal = this.buttonValue;
					this.flag = false;
					this.list.push({
						img: random(),
						time: handleCurrentDate(),
						text: this.textVal,
						delet: "删除",
					})
					this.buttonValue = ""
				},

				handDelet: function(index) {
					this.list.splice(index, 1)
					console.log(this.list.splice);

				}
			}
		})
	}

	methods();

})();