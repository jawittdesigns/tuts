<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
				<hr>
				<select v-model="alertAnimation" class="form-group">
					<option value="fade">Fade</option>
					<option value="slide">Slide</option>
				</select>
				<br><br>
				<button class="btn btn-primary" @click="show = !show">Show Alert</button>
				<br><br>
				<transition :name="alertAnimation">
					<div class="alert alert-info" v-show="show">This is some info</div>
				</transition>
				<transition name="slide" type="animation">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				<transition
					appear
					enter-active-class="animated bounce"
					leave-active-class="animated shake">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
				show: true,
				alertAnimation: 'fade'
            }
        }
    }
</script>

<style>
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 1s;
	}

	.fade-leave {

	}

	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}

	.slide-enter {
		opacity: 0;
	}

	.slide-enter-active {
		animation: slide-in 1s ease-out forwards;
		transition: opacity 1s;
	}

	.slide-leave {

	}

	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 3s;
		opacity: 0;
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>
