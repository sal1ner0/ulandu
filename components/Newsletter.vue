<template>
  <section id="subscribe">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <p>Subscribe us for latest news</p>
        </div>
        <div class="col-sm-5">
          <form @submit.stop.prevent="subscribe">
            <div class="subscribe-input-div">
              <div class="form-group col-sm-11">
                <input class="form-control" placeholder="Enter your email address" type="email" v-model.trim="email">
                <span v-if="!$v.email.required && $v.email.$dirty" class="error">
                    Email address is required
                  </span>
                <span v-if="!$v.email.email && $v.email.$dirty" class="error">
                    Please enter valid email address
                  </span>
              </div>
              <button>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {email, required} from "vuelidate/lib/validators";

export default {
  name: "Newsletter",
  data() {
    return {
      showLoader: false,
      email: "",
    }
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    subscribe() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.showLoader = true;
        this.$store
          .dispatch("newsletter/subscribe", {
            email: this.email,
          })
          .then((message) => {
            // Clear form
            this.email = null;
            this.$v.$reset();

            //
            this.$toast.success(message);
          })
          .finally(() => {
            this.showLoader = false;
          });
      }
    },
  }
}
</script>

<style scoped>

</style>
