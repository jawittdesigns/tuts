new Vue({
	el: '#app',
	data: {
		title: 'Becoming a Vue Ninja',
		name: 'Ryu'
	},
	methods: {
		updateName(e) {
			//console.log(e.target.value);
			this.name = e.target.value;
		}
	}
});
