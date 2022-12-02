<template>
  <div>
    <!-- contactus  Section -->
    <section id="contactus" class="">
      <div class="row ">
        <div class="col-sm-5 contact-left">
          <div class="contactus-social">
            <div class="d-flex align-items-start contactus-info ">
              <img class="info-icon" src="~static/images/mail.svg"/>
              <div>
                <p>Chat to us</p>
                <span>
                  <a :href="`mailto:${$config.contact.email}`">
                  {{ $config.contact.email }}
                </a>
                </span>
              </div>
            </div>
            <div class="d-flex align-items-start contactus-info">
              <img class="info-icon" src="~static/images/map.svg"/>
              <div>
                <p>Office</p>
                <span>
                  {{ $config.contact.address }}
                </span>
              </div>
            </div>
            <div class="d-flex align-items-start contactus-info">
              <img class="info-icon" src="~static/images/call.svg"/>
              <div>
                <p>Phone</p>
                <span>
                  <a :href="`tel:${$config.contact.phone_number}`">
                  {{ $config.contact.phone_number }}
                </a>
                </span>
              </div>
            </div>
          </div>
          <img class="contactus-img" src="~static/images/contactus.svg">
        </div>

        <div class="col-sm-6 offset-sm-1">
          <div class="contact-right">
            <h4>Level up your idea</h4>
            <p>You can reach us anytime via <a href="mailto:sales@novuslogics.com">sales@novuslogics.com</a></p>
            <form method="POST" @submit.stop.prevent="contact">
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="name">Name</label>
                  <input id="name" class="form-control" placeholder="Enter your name" type="text" v-model.trim="name">
                  <span v-if="!$v.name.required && $v.name.$dirty" class="error">
                    Name is required
                  </span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="email">Email</label>
                  <input id="email" class="form-control" placeholder="Email" type="email" v-model.trim="email">
                  <span v-if="!$v.email.required && $v.email.$dirty" class="error">
                    Email address is required
                  </span>
                  <span v-if="!$v.email.email && $v.email.$dirty" class="error">
                    Please enter valid email address
                  </span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="country">Country Name</label>
                  <select id="country" class="form-control" v-model.trim="country" @change="countrySelected($event)">
                    <option v-for="country in countries" :key="`${country.name}`">
                      {{country.name}}
                    </option>
                  </select>
                  <span v-if="!$v.country.required && $v.country.$dirty" class="error">
                    Please select country
                  </span>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="country_code">Country code</label>
                  <select id="country_code" class="form-control" v-model.trim="country_code">
                    <option v-for="country in countryCodes" :key="`${country.name}-${country.dial_code}`" :value="country.dial_code">
                      {{country.dial_code}} - {{country.name}}
                    </option>
                  </select>
                  <span v-if="!$v.country_code.required && $v.country_code.$dirty" class="error">
                    Please select country code
                  </span>
                </div>
                <div class="form-group col-md-9">
                  <label for="phone_number">Contact number</label>
                  <input id="phone_number" class="form-control" placeholder="Enter your mobile number" type="number" v-model.trim="phone_number">
                  <span v-if="!$v.phone_number.required && $v.phone_number.$dirty" class="error">
                    Please enter phone number
                  </span>
                </div>
              </div>
              <div class="form-group">
                <label for="message">How can we help</label>
                <textarea id="message" class="form-control" rows="5" v-model.trim="message"></textarea>
                <span v-if="!$v.message.required && $v.message.$dirty" class="error">
                    Please enter message
                  </span>
              </div>
              <div class="form-row">
                <p class="contact-service-text col-sm-12">Services</p>
                <div class="col-sm-5 col-12 col-md-12 col-lg-5" v-for="provided_service in provided_services" :key="provided_service">
                  <label class="check-container">
                    {{ provided_service }}
                    <input type="checkbox" :value="provided_service" v-model.trim="services">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <span v-if="!$v.services.required && $v.services.$dirty" class="error">
                    Please choose any service
                  </span>
              </div>
              <button class="btn btn-primary contactus-btn col-sm-3" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
    <!--End Tab  Section -->
  </div>
</template>

<script>
import {countries} from "static/data/countries.json";

import {email, required} from "vuelidate/lib/validators";

export default {
  name: "contact-us",
  data() {
    return {
      provided_services: [
        "App Development",
        "Web Development",
        "UI/UX Design",
        "Quality Assurance",
        "Search Engine Optimization",
      ],
      showLoader: false,
      name: "",
      email: "",
      country_code: "",
      phone_number: "",
      country: "",
      message: "",
      services: [],
    }
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    country_code: {
      required,
    },
    phone_number: {
      required,
    },
    country: {
      required,
    },
    message: {
      required,
    },
    services: {
      required,
    },
  },
  methods: {
    countrySelected(event) {
      if (this.country_code === "") {
        const selectedCountry = this.countries.find(country => country.name === event.target.value)
        this.country_code = selectedCountry.dial_code;
      }
    },
    contact() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.showLoader = true;
        this.$store
          .dispatch("contact/contact", {
            name: this.name,
            email: this.email,
            country_code: this.country_code,
            phone_number: this.phone_number,
            country: this.country,
            message: this.message,
            services: this.services,
          })
          .then((message) => {
            // Clear form
            this.name = null;
            this.email = null;
            this.country_code = null;
            this.phone_number = null;
            this.country = null;
            this.message = null;
            this.services = [];

            this.$v.$reset();

            //
            this.$toast.success(message);
          })
          .finally(() => {
            this.showLoader = false;
          });
      }
    },
  },
  computed: {
    countryCodes() {
      return countries.sort((a, b) => a.dial_code - b.dial_code);
    },
    countries() {
      return countries.sort((a, b) => a.name - b.name);
    },
  }
}
</script>

<style scoped>

</style>
